import React, { useEffect, useState } from "react";
import DiceRoll from "../../components/DiceRoll";
import Map from "../../components/Map";
import { useAuth } from "../../contexts/auth";
import { useCampaign } from "../../contexts/campaignContext";
import api from "../../services/api";

import { Container, Content, RightSide, Infos } from "./styles";

function Home() {
  const contextCampaign = useCampaign();
  const contextAuth = useAuth();
  const [game, setGame] = useState(null);
  const [selectedPlayer, setSelectedPlayer] = useState({ attributes: [] });

  async function getGameController() {
    // setLoader(true);
    const response = await api.get(`/game/${contextCampaign.campaign.id}`);

    setGame(response.data);
    // setLoader(false);
  }

  function initSelectedPlayer() {
    let initChar =
      game &&
      game.characters.find((char) => char.playerId === contextAuth.user.id);
    setSelectedPlayer(initChar);
  }

  useEffect(() => {
    getGameController();
  }, []);

  useEffect(() => {
    initSelectedPlayer();
  }, [game, contextAuth]);

  function selectPlayer(player) {
    setSelectedPlayer(player);
  }

  return (
    <>
      <Container>
        <Content>
          <Map />
          <RightSide>
            <Infos>
              {contextAuth.isMaster ? (
                <a href="/todas-as-fichas">Todas as fichas</a>
              ) : (
                <a href="/ficha">Ficha</a>
              )}
              <div>
                <h4>
                  Player Selecionado:{" "}
                  <span>{selectedPlayer?.attributes[0]?.value}</span>
                </h4>
                {contextAuth.isMaster && (
                  <>
                    <p>NPC's:</p>
                    {game &&
                      game.characters.map((character) => {
                        if (character.playerId === contextAuth.user.id) {
                          return (
                            <p onClick={() => selectPlayer(character)}>
                              {character.attributes[0].value}
                            </p>
                          );
                        }
                      })}
                  </>
                )}
              </div>
            </Infos>
            <DiceRoll game={game} selectedPlayer={selectedPlayer} />
          </RightSide>
        </Content>
      </Container>
    </>
  );
}

export default Home;

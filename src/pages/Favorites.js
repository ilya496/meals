import React, { useState } from "react";
import { db } from "../firebase";
import { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { MealsContext } from "../Context";
import Meal from "../components/Meal/Meal";
import styled from "styled-components";
import CustomAlert from "../components/Alert/CustomAlert";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 90%;
    margin: 0 auto;
`;

const Wrapper = styled.div`
    text-align: center;
`;

function Favorites() {
    const { id } = useParams();
    const {
        currentUser,
        favorites,
        loadingFavorites: loading,
        showAlert,
    } = useContext(MealsContext);

    const history = useHistory();
    if (id !== currentUser.uid) {
        history.replace("/");
    }

    if (favorites.length === 0) {
        return (
            <div>
                <h2>You don't have any favorites yet.</h2>
            </div>
        );
    }

    return (
        <Wrapper>
            {showAlert.state && showAlert.type === "remove" && (
                <CustomAlert msg={showAlert.msg} variant={showAlert.variant} />
            )}
            {loading && <h2>Loading</h2>}
            {!loading && (
                <>
                    <h2>Your favorites</h2>

                    <Container>
                        {favorites.map(({ data, idx }) => (
                            <Meal
                                meal={data.meal}
                                key={idx}
                                isFavorite={true}
                            />
                        ))}
                    </Container>
                </>
            )}
        </Wrapper>
    );
}

export default Favorites;

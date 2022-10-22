import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsStar, BsStarFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import useFetch from "../../hooks/useFetch";
import { addFavorite, removeFavorite } from "../../redux/favorite/action";
import Modal from "../Modal/Modal";
import "./Favorite.css";

export default function Favorite({ data }) {
  const [detail, setDetail] = useState("");
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: detailData } = useFetch(
    `https://www.omdbapi.com/?t=${detail}&apikey=1df32d36`
  );

  const filterStar = data.map((item) => ({
    ...item,
    Favorite: true,
  }));

  const handleFavorite = (item) => {
    dispatch(addFavorite(item));
  };

  const handleRemoveFavorite = (item) => {
    dispatch(removeFavorite(item));
  };
  return (
    <div className="mt-5">
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="5" className="font-bold">
            Title
          </Col>
          <Col lg="3" className="font-bold">
            Year
          </Col>
          <Col lg="2" className="font-bold">
            imDB ID
          </Col>
          <Col lg="2" className="font-bold"></Col>
        </Row>
      </Container>
      <Container>
        {filterStar?.map((item, index) => {
          return (
            <Row key={index} className="justify-content-md-center">
              <Col
                xs
                lg="5"
                className="cursor-pointer"
                onClick={() => {
                  setDetail(item?.Title);
                  setIsModalOpen(true);
                }}
              >
                {item?.Title}
              </Col>
              <Col lg="3">{item?.Year}</Col>
              <Col lg="2">{item?.imdbID}</Col>
              <Col lg="2">
                {!item?.Favorite
                  ? !data?.Error && (
                      <BsStar
                        className="cursor-pointer"
                        onClick={() => handleFavorite(item)}
                      />
                    )
                  : !data?.Error && (
                      <BsStarFill
                        className="cursor-pointer"
                        onClick={() => handleRemoveFavorite(item)}
                      />
                    )}
              </Col>
            </Row>
          );
        })}
      </Container>
      {isModalOpen && <Modal setOpen={setIsModalOpen} data={detailData} />}
    </div>
  );
}

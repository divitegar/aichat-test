import { Tabs, Tab, Container, Row, Col } from "react-bootstrap";
import "./Tabbar.css";
import { BsSearch, BsStar, BsStarFill } from "react-icons/bs";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/favorite/action";
import Modal from "../Modal/Modal";
import Favorite from "../Favorite/Favorite";
import useFetch from "../../hooks/useFetch";

export default function Tabbar() {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  const dispatch = useDispatch();
  const listFavorite = useSelector(
    (state) => state.reducerFavorite.listFavorite
  );

  const { data: dataSearch, loading } = useFetch(
    `https://www.omdbapi.com/?s=${title}&apikey=1df32d36`
  );

  const { data: detailData } = useFetch(
    `https://www.omdbapi.com/?t=${detail}&apikey=1df32d36`
  );

  const filterStar = dataSearch?.Search?.map((item) => ({
    ...item,
    Favorite: listFavorite?.some((i) =>
      i?.imdbID === item?.imdbID ? true : false
    ),
  }));

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setTitle(e.target.search.value);
  };

  const handleFavorite = (item) => {
    dispatch(addFavorite(item));
  };

  const handleRemoveFavorite = (item) => {
    dispatch(removeFavorite(item));
  };

  return (
    <>
      <Tabs defaultActiveKey="movie" id="uncontrolled-tab-example">
        <Tab eventKey="movie" title="Search Movie">
          <div className="wrapper-search__tabbar">
            <form onSubmit={(e) => handleSearch(e)}>
              <label htmlFor="search">
                <div className="wrapper-input-search">
                  <input
                    type="search"
                    name="search"
                    className="input-search"
                    placeholder="Enter Movie Title Here..."
                  />
                  <div className="icon-input-search">
                    <BsSearch />
                  </div>
                </div>
              </label>
            </form>
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
                  <Col lg="2" className="font-bold">
                    Saved Favorite
                  </Col>
                </Row>
              </Container>
            </div>
            <div>
              {loading && <div>Loading....</div>}
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
                          ? !dataSearch?.Error && (
                              <BsStar
                                className="cursor-pointer"
                                onClick={() => handleFavorite(item)}
                              />
                            )
                          : !dataSearch?.Error && (
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
              {dataSearch?.Response === "False" && (
                <div className="text-center">Silahkan cari...</div>
              )}
            </div>
          </div>
        </Tab>
        <Tab eventKey="favorite" title="Favorite">
          <Favorite data={listFavorite} />
        </Tab>
      </Tabs>
      {isModalOpen && <Modal setOpen={setIsModalOpen} data={detailData} />}
    </>
  );
}

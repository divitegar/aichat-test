import { useEffect, useState } from "react";
import "./Modal.css";

export default function Modal({ setOpen, data }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => setLoading(false), 1500);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  console.log(data);

  return (
    <div className="bg-modal" onClick={() => setOpen(false)}>
      <div className="centered__modal">
        <div className="bg-content__modal">
          {loading ? (
            <div className="center-loader__modal">
              <div className="loader__modal" />
            </div>
          ) : (
            <>
              <div className="wrapper-content__modal">
                <img src={data?.Poster} alt={data?.Title} />
                <div className="wrapper-data__modal">
                  <div className="font-bold">
                    Title :{" "}
                    <span className="font-normal text-lg">{data?.Title}</span>
                  </div>
                  <div className="font-bold">
                    Director :{" "}
                    <span className="font-normal text-lg">
                      {data?.Director}
                    </span>
                  </div>
                  <div className="font-bold">
                    Writer :{" "}
                    <span className="font-normal text-lg">{data?.Writer}</span>
                  </div>
                  <div className="font-bold">
                    Actors :{" "}
                    <span className="font-normal text-lg">{data?.Actors}</span>
                  </div>
                  <div className="font-bold">
                    Year :{" "}
                    <span className="font-normal text-lg">{data?.Year}</span>
                  </div>
                  <div className="font-bold">
                    Released :{" "}
                    <span className="font-normal text-lg">
                      {data?.Released}
                    </span>
                  </div>
                  <div className="font-bold">
                    Production :{" "}
                    <span className="font-normal text-lg">
                      {data?.Production}
                    </span>
                  </div>
                  <div className="font-bold">
                    Plot :{" "}
                    <span className="font-normal text-lg">{data?.Plot}</span>
                  </div>
                  <div className="font-bold">
                    Type :{" "}
                    <span className="font-normal text-lg">{data?.Type}</span>
                  </div>
                  <div className="font-bold">
                    Genre :{" "}
                    <span className="font-normal text-lg">{data?.Genre}</span>
                  </div>
                  <div className="font-bold">
                    Language :{" "}
                    <span className="font-normal text-lg">
                      {data?.Language}
                    </span>
                  </div>
                  <div className="font-bold">
                    Rating :{" "}
                    <span className="font-normal text-lg">
                      {data?.Ratings.map((item, index) => (
                        <div key={index}>
                          <div className="font-bold">
                            <span className="font-normal">
                              {item?.Source}, {item?.Value}
                            </span>
                          </div>
                        </div>
                      ))}
                    </span>
                  </div>
                  <div className="font-bold">
                    Rated :{" "}
                    <span className="font-normal text-lg">{data?.Rated}</span>
                  </div>
                  <div className="font-bold">
                    Duration :{" "}
                    <span className="font-normal text-lg">{data?.Runtime}</span>
                  </div>
                  <div className="font-bold">
                    Metascore :{" "}
                    <span className="font-normal text-lg">
                      {data?.Metascore}
                    </span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

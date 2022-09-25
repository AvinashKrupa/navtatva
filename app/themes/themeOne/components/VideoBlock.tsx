import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Slider from "react-slick";
import { preferenceSliderSetting } from "../../../../utils/sliderConfig";

const VideoBlock = () => {
  const [openVideo, setOpenVideo] = useState<boolean>(false);

  return (
    <>
      <section className="mt-4 mt-md-5 video pb-5">
        <div className="wrapper">
          <div className="row">
            <div className="col-md-12 position-relative sliderView">
              <div className="Preference-slider">
                <Slider {...preferenceSliderSetting}>
                  <div className="thumb position-relative">
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#video"
                      className="video-icon"
                      onClick={() => {
                        setOpenVideo(true);
                      }}
                    >
                      <img className="w-100" src="images/video-1.png" alt="" />
                      <div className="overlay text-center p-3">
                        <img src="images/video-icon.png" alt="" />
                      </div>
                    </a>
                  </div>
                  <div className="thumb position-relative">
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#video"
                      className="video-icon"
                      onClick={() => {
                        setOpenVideo(true);
                      }}
                    >
                      <img className="w-100" src="images/video-1.png" alt="" />
                      <div className="overlay text-center p-3">
                        <img src="images/video-icon.png" alt="" />
                      </div>
                    </a>
                  </div>
                  <div className="thumb position-relative">
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#video"
                      className="video-icon"
                      onClick={() => {
                        setOpenVideo(true);
                      }}
                    >
                      <img className="w-100" src="images/video-1.png" alt="" />
                      <div className="overlay text-center p-3">
                        <img src="images/video-icon.png" alt="" />
                      </div>
                    </a>
                  </div>
                  <div className="thumb position-relative">
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#video"
                      className="video-icon"
                      onClick={() => {
                        setOpenVideo(true);
                      }}
                    >
                      <img className="w-100" src="images/video-1.png" alt="" />
                      <div className="overlay text-center p-3">
                        <img src="images/video-icon.png" alt="" />
                      </div>
                    </a>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Modal
        show={openVideo}
        animation={true}
        className="video-popup"
        size={"lg"}
        id="video"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                className="btn-close float-end mb-3"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  setOpenVideo(false);
                }}
              ></button>
              <iframe
                width="100%s"
                height={500}
                src="https://www.youtube.com/embed/tgbNymZ7vqY"
              />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default VideoBlock;

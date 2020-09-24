import React from "react";
import "./SwipeButtons.css";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";

function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <IconButton>
        <ReplayIcon className="swipeButtons__repeat" fontSize="large" />
      </IconButton>
      <IconButton>
        <CloseIcon className="swipeButtons__close" fontSize="large" />
      </IconButton>
      <IconButton>
        <StarRateIcon className="swipeButtons__starRate" fontSize="large" />
      </IconButton>
      <IconButton>
        <FavoriteIcon className="swipeButtons__favorite" fontSize="large" />
      </IconButton>
      <IconButton>
        <FlashOnIcon className="swipeButtons__flashOn" fontSize="large" />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;

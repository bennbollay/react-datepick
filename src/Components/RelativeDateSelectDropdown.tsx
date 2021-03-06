import React, { useState, useEffect } from "react";
import {
  Button,
  Box,
  Typography,
  GridList,
  GridListTile,
  TextField,
  Grid,
  Menu,
  MenuItem,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

interface Inputs {
  identifier: number;
  relativeTerms: string[];
  relativeIntervals: string[];
  relativeSelectContent: string[];
  classes: any;
  handleMenuClick(identifier: number, event: EventTarget): void;
  handleClose(identifier: number, item: string): void;
  getAnchorEl(identifier: number): Element;
}

export const RelativeDateSelectDropdown: React.FC<Inputs> = (props) => {
  let term = props.relativeTerms;
  let interval = props.relativeIntervals;

  enum menu {
    term = 0,
    interval = 1,
  }

  let list: string[] = [];
  if (props.identifier == menu.term) {
    list = term;
  } else if (props.identifier == menu.interval) {
    list = interval;
  }

  return (
    <div>
      <Button
        className={props.classes.bodyDateSelectDropdownButton}
        aria-controls={String(props.identifier)}
        variant="outlined"
        color="primary"
        aria-haspopup="true"
        onClick={(event) =>
          props.handleMenuClick(props.identifier, event.currentTarget)
        }
      >
        <Box className={props.classes.flexRow}>
          {props.relativeSelectContent[props.identifier]}
          <Box ml={1} />
          <ExpandMoreIcon />
        </Box>
      </Button>
      <Menu
        id={String(props.identifier)}
        anchorEl={props.getAnchorEl(props.identifier)}
        keepMounted
        open={Boolean(props.getAnchorEl(props.identifier))}
        onClose={() =>
          props.handleClose(
            props.identifier,
            props.relativeSelectContent[props.identifier]
          )
        }
      >
        {list.map((item) => (
          <MenuItem onClick={() => props.handleClose(props.identifier, item)}>
            {item}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

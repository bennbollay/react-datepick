import React, { useState, useEffect } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ms from "ms";
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
import { RelativeDateSelectDropdown } from "./RelativeDateSelectDropdown.tsx";

interface Inputs {
  termAnchorEl: any;
  intervalAnchorEl: any;
  relativeTerms: string[];
  relativeIntervals: string[];
  relativeSelectContent: string[];
  classes: any;
  applyFn(text: string[]): void;
  setTermAnchorEl(element: EventTarget | null): void;
  setIntervalAnchorEl(element: EventTarget | null): void;
}

export const DateSelect: React.FC<Inputs> = (props) => {
  enum menu {
    term = 0,
    interval = 1,
  }

  function getAnchorEl(identifier: number): Element {
    if (identifier == menu.term) {
      return props.termAnchorEl;
    } else {
      return props.intervalAnchorEl;
    }
  }

  function setAnchorEl(identifier: number, item: EventTarget | null): void {
    if (identifier == menu.term) {
      props.setTermAnchorEl(item);
    } else {
      props.setIntervalAnchorEl(item);
    }
  }

  function handleMenuClick(identifier: number, event: EventTarget): void {
    setAnchorEl(identifier, event);
  }

  function handleClose(identifier: number, item: string): void {
    setAnchorEl(identifier, null);
    console.log(item)
    let words = props.relativeSelectContent;
    words[identifier] = item;
    props.applyFn(words);
  }

  function getDropdownObj(index: number) {
    return {
      relativeTerms: props.relativeTerms,
      relativeIntervals: props.relativeIntervals,
      relativeSelectContent: props.relativeSelectContent,
      handleClose,
      classes: props.classes,
      handleMenuClick,
      getAnchorEl,
      identifier: index,
    };
  }

  return (
    <Box className={props.classes.flexRow}>
      <Box>
        <RelativeDateSelectDropdown {...getDropdownObj(0)} />
      </Box>
      <Box ml={1}>
        <RelativeDateSelectDropdown {...getDropdownObj(1)} />
      </Box>
    </Box>
  );
};

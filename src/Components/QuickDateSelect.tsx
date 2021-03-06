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
import DateRange from "./DateRange.tsx";
import { RelativeDateSelectDropdown } from "./RelativeDateSelectDropdown.tsx";

interface Inputs {
  termAnchorEl: any;
  intervalAnchorEl: any;
  quickSelectTerms: string[];
  quickSelectIntervals: string[];
  quickSelectContent: string[];
  classes: any;
  handleClick(text: string[]): void;
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
    let words = props.quickSelectContent;
    words[identifier] = item;
    props.handleClick(words);
  }

  function getDropdownObj(index: number) {
    return {
      relativeTerms: props.quickSelectTerms,
      relativeIntervals: props.quickSelectIntervals,
      relativeSelectContent: props.quickSelectContent,
      handleClose,
      handleMenuClick,
      getAnchorEl,
      classes: props.classes,
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

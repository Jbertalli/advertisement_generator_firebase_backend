import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import type { RootState } from '../store';
import { companyValue } from '../slices/companySlice';
import { descriptionValue } from '../slices/descriptionSlice';
import { widthValue } from '../slices/widthSlice';
import { heightValue } from '../slices/heightSlice';
import { leftValue } from '../slices/leftSlice';
import { topValue } from '../slices/topSlice';

const LOCAL_STORAGE_KEY_NAME = 'CompanyName';
const LOCAL_STORAGE_KEY_DESCRIPTION = 'AdvertisementDescription';
const LOCAL_STORAGE_KEY_WIDTH = 'ImageWidth';
const LOCAL_STORAGE_KEY_HEIGHT = 'ImageHeight';
const LOCAL_STORAGE_KEY_LEFT = 'ImageLeft';
const LOCAL_STORAGE_KEY_TOP = 'ImageTop';

export default function Local(values) {

  const {
    setCompany,
    setDescription,
    setWidth,
    setHeight,
    setLeft,
    setTop,
    company,
    description,
    width,
    height,
    left,
    top,
  } = values;

  const companyName = useSelector(companyValue);
  const descriptionName = useSelector(descriptionValue);
  const widthName = useSelector(widthValue);
  const heightName = useSelector(heightValue);
  const leftName = useSelector(leftValue);
  const topName = useSelector(topValue);

  // // Company name
  // useEffect(() => {
  //   const storedName = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_NAME));
  //   if (storedName) setCompany(storedName);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY_NAME, JSON.stringify(companyName));
  // }, [companyName]);

  // // Advertisement Description
  // useEffect(() => {
  //   const storedDescription = JSON.parse(
  //     localStorage.getItem(LOCAL_STORAGE_KEY_DESCRIPTION)
  //   );
  //   if (storedDescription) setDescription(storedDescription);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem(
  //     LOCAL_STORAGE_KEY_DESCRIPTION,
  //     JSON.stringify(descriptionName)
  //   );
  // }, [descriptionName]);

  // // width
  // useEffect(() => {
  //   const storedWidth = JSON.parse(
  //     localStorage.getItem(LOCAL_STORAGE_KEY_WIDTH)
  //   );
  //   if (storedWidth) setWidth(storedWidth);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY_WIDTH, JSON.stringify(widthName));
  // }, [widthName]);

  // // height
  // useEffect(() => {
  //   const storedHeight = JSON.parse(
  //     localStorage.getItem(LOCAL_STORAGE_KEY_HEIGHT)
  //   );
  //   if (storedHeight) setHeight(storedHeight);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY_HEIGHT, JSON.stringify(heightName));
  // }, [heightName]);

  // // left
  // useEffect(() => {
  //   const storedLeft = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_LEFT));
  //   if (storedLeft) setLeft(storedLeft);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY_LEFT, JSON.stringify(leftName));
  // }, [leftName]);

  // // top
  // useEffect(() => {
  //   const storedTop = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_TOP));
  //   if (storedTop) setTop(storedTop);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY_TOP, JSON.stringify(topName));
  // }, [topName]);

// Company name
useEffect(() => {
  const storedName = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_NAME));
  if (storedName) setCompany(storedName);
}, []);

useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY_NAME, JSON.stringify(company));
}, [company]);

// Advertisement Description
useEffect(() => {
  const storedDescription = JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_KEY_DESCRIPTION)
  );
  if (storedDescription) setDescription(storedDescription);
}, []);

useEffect(() => {
  localStorage.setItem(
    LOCAL_STORAGE_KEY_DESCRIPTION,
    JSON.stringify(description)
  );
}, [description]);

// width
useEffect(() => {
  const storedWidth = JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_KEY_WIDTH)
  );
  if (storedWidth) setWidth(storedWidth);
}, []);

useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY_WIDTH, JSON.stringify(width));
}, [width]);

// height
useEffect(() => {
  const storedHeight = JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_KEY_HEIGHT)
  );
  if (storedHeight) setHeight(storedHeight);
}, []);

useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY_HEIGHT, JSON.stringify(height));
}, [height]);

// left
useEffect(() => {
  const storedLeft = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_LEFT));
  if (storedLeft) setLeft(storedLeft);
}, []);

useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY_LEFT, JSON.stringify(left));
}, [left]);

// top
useEffect(() => {
  const storedTop = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_TOP));
  if (storedTop) setTop(storedTop);
}, []);

useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY_TOP, JSON.stringify(top));
}, [top]);

  return <>&nbsp;</>;
}

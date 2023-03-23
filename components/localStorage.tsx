import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
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
const LOCAL_STORAGE_KEY_SAVED = 'Saved';
const LOCAL_STORAGE_KEY_SELECTED = 'Selected';
const LOCAL_STORAGE_KEY_IMAGE = 'Image';
const LOCAL_STORAGE_KEY_URL = 'url';
const LOCAL_STORAGE_KEY_FULL = 'Full';

export default function Local(values) {

  const {
    setCompany,
    setDescription,
    setWidth,
    setHeight,
    setLeft,
    setTop,
    setSelected,
    setMediaPreview,
    setSaved,
    setUrl,
    setFull,
    company,
    description,
    width,
    height,
    left,
    top,
    selected,
    mediaPreview,
    saved,
    url,
    full
  } = values;

  const companyName = useSelector(companyValue);
  const descriptionName = useSelector(descriptionValue);
  const widthName = useSelector(widthValue);
  const heightName = useSelector(heightValue);
  const leftName = useSelector(leftValue);
  const topName = useSelector(topValue);

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

// saved
useEffect(() => {
  const storedSaved = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_SAVED));
  if (storedSaved) setSaved(storedSaved);
}, []);

useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY_SAVED, JSON.stringify(saved));
}, [saved]);

// selected
useEffect(() => {
  const storedSelected = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_SELECTED));
  if (storedSelected) setSelected(storedSelected);
}, []);

useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY_SELECTED, JSON.stringify(selected));
}, [selected]);

// mediaPreview
useEffect(() => {
  const adImage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_IMAGE));
  if (adImage) setMediaPreview(adImage);
}, []);

useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY_IMAGE, JSON.stringify(mediaPreview));
}, [mediaPreview]);

// url
useEffect(() => {
  const url = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_URL));
  if (url) setUrl(url);
}, []);

useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY_URL, JSON.stringify(url));
}, [url]);

// full
useEffect(() => {
  const full = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_FULL));
  if (full) setFull(full);
}, []);

useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY_FULL, JSON.stringify(full));
}, [full]);

  return <>&nbsp;</>;
}

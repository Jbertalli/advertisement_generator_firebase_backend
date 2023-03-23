import React, { useEffect } from 'react';

const LOCAL_STORAGE_KEY_COMPANY = 'Company';
const LOCAL_STORAGE_KEY_COMPANY_FONT = 'Company_Font';
const LOCAL_STORAGE_KEY_COMPANY_WEIGHT = 'Company_Weight';
const LOCAL_STORAGE_KEY_DESCRIPTION = 'Description';
const LOCAL_STORAGE_KEY_DESCRIPTION_FONT = 'Description_Font';
const LOCAL_STORAGE_KEY_DESCRIPTION_WEIGHT = 'Description_Weight';
const LOCAL_STORAGE_KEY_BORDER_WIDTH = 'Border_Width';
const LOCAL_STORAGE_KEY_BORDER_COLOR = 'Border_Color';
const LOCAL_STORAGE_KEY_COLOR = 'Color';
const LOCAL_STORAGE_KEY_BACKGROUND = 'Background';
const LOCAL_STORAGE_KEY_CUSTOM_IMAGE = 'Custom_Image';
const LOCAL_STORAGE_KEY_IMAGE_WIDTH = 'Image_Width';
const LOCAL_STORAGE_KEY_IMAGE_HEIGHT = 'Image_Height';
const LOCAL_STORAGE_KEY_IMAGE_ROTATION = 'Image_Rotation';
const LOCAL_STORAGE_KEY_EDIT_TITLE = 'Edit_Title';
const LOCAL_STORAGE_KEY_EDIT_DESCRIPTION = 'Edit_Description';
const LOCAL_STORAGE_KEY_EDIT_BORDER = 'Edit_Border';
const LOCAL_STORAGE_KEY_EDIT_GLOBAL = 'Edit_Global';
const LOCAL_STORAGE_KEY_EDIT_IMAGE = 'Edit_Image';
const LOCAL_STORAGE_KEY_SAVED_CUSTOM = 'SavedCustom';
const LOCAL_STORAGE_KEY_SELECTED_CUSTOM = 'CustomSelected';
const LOCAL_STORAGE_KEY_IMAGE = 'CustomImage';
const LOCAL_STORAGE_KEY_URL = 'CustomUrl';
const LOCAL_STORAGE_KEY_FULL = 'CustomFull';

export default function LocalCustom(values) {
    
  const {
    company,
    setCompany,
    companyFontSize,
    setCompanyFontSize,
    companyFontWeight,
    setCompanyFontWeight,
    description,
    setDescription,
    descriptionFontSize,
    setDescriptionFontSize,
    descriptionFontWeight,
    setDescriptionFontWeight,
    borderWidth,
    setBorderWidth,
    borderColor,
    setBorderColor,
    color,
    setColor,
    backgroundColor,
    setBackgroundColor,
    imageWidth,
    setImageWidth,
    imageHeight,
    setImageHeight,
    imageRotation,
    setImageRotation,
    editTitle,
    setEditTitle,
    editDescription,
    setEditDescription,
    editBorder,
    setEditBorder,
    editGlobal,
    setEditGlobal,
    editImage,
    setEditImage,
    selected,
    setSelected,
    mediaPreview,
    setMediaPreview,
    saved,
    setSaved,
    url,
    setUrl,
    full,
    setFull,
  } = values;

  useEffect(() => {
    const storedCompany = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY_COMPANY)
    );
    if (storedCompany) setCompany(storedCompany);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_COMPANY, JSON.stringify(company));
  }, [company]);

  useEffect(() => {
    const storedCompanyFontSize = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY_COMPANY_FONT)
    );
    if (storedCompanyFontSize) setCompanyFontSize(storedCompanyFontSize);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE_KEY_COMPANY_FONT,
      JSON.stringify(companyFontSize)
    );
  }, [companyFontSize]);

  useEffect(() => {
    const storedCompanyFontWeight = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY_COMPANY_WEIGHT)
    );
    if (storedCompanyFontWeight) setCompanyFontWeight(storedCompanyFontWeight);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE_KEY_COMPANY_WEIGHT,
      JSON.stringify(companyFontWeight)
    );
  }, [companyFontWeight]);

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

  useEffect(() => {
    const storedDescriptionFontSize = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY_DESCRIPTION_FONT)
    );
    if (storedDescriptionFontSize)
      setDescriptionFontSize(storedDescriptionFontSize);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE_KEY_DESCRIPTION_FONT,
      JSON.stringify(descriptionFontSize)
    );
  }, [descriptionFontSize]);

  useEffect(() => {
    const storedDescriptionFontWeight = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY_DESCRIPTION_WEIGHT)
    );
    if (storedDescriptionFontWeight)
      setDescriptionFontWeight(storedDescriptionFontWeight);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE_KEY_DESCRIPTION_WEIGHT,
      JSON.stringify(descriptionFontWeight)
    );
  }, [descriptionFontWeight]);

  useEffect(() => {
    const storedBorderWidth = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY_BORDER_WIDTH)
    );
    if (storedBorderWidth) setBorderWidth(storedBorderWidth);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE_KEY_BORDER_WIDTH,
      JSON.stringify(borderWidth)
    );
  }, [borderWidth]);

  useEffect(() => {
    const storedBorderColor = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY_BORDER_COLOR)
    );
    if (storedBorderColor) setBorderColor(storedBorderColor);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE_KEY_BORDER_COLOR,
      JSON.stringify(borderColor)
    );
  }, [borderColor]);

  useEffect(() => {
    const storedColor = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY_COLOR)
    );
    if (storedColor) setColor(storedColor);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_COLOR, JSON.stringify(color));
  }, [color]);

  useEffect(() => {
    const storedBackgroundColor = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY_BACKGROUND)
    );
    if (storedBackgroundColor) setBackgroundColor(storedBackgroundColor);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE_KEY_BACKGROUND,
      JSON.stringify(backgroundColor)
    );
  }, [backgroundColor]);

  useEffect(() => {
    const storedImageWidth = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY_IMAGE_WIDTH)
    );
    if (storedImageWidth) setImageWidth(storedImageWidth);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE_KEY_IMAGE_WIDTH,
      JSON.stringify(imageWidth)
    );
  }, [imageWidth]);

  useEffect(() => {
    const storedImageHeight = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY_IMAGE_HEIGHT)
    );
    if (storedImageHeight) setImageHeight(storedImageHeight);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE_KEY_IMAGE_HEIGHT,
      JSON.stringify(imageHeight)
    );
  }, [imageHeight]);

  useEffect(() => {
    const storedImageRotation = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY_IMAGE_ROTATION)
    );
    if (storedImageRotation) setImageRotation(storedImageRotation);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE_KEY_IMAGE_ROTATION,
      JSON.stringify(imageRotation)
    );
  }, [imageRotation]);

  useEffect(() => {
    const storedEditTitle = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY_EDIT_TITLE)
    );
    if (storedEditTitle) setEditTitle(storedEditTitle);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE_KEY_EDIT_TITLE,
      JSON.stringify(editTitle)
    );
  }, [editTitle]);

  useEffect(() => {
    const storedEditDescription = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY_EDIT_DESCRIPTION)
    );
    if (storedEditDescription) setEditDescription(storedEditDescription);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE_KEY_EDIT_DESCRIPTION,
      JSON.stringify(editDescription)
    );
  }, [editDescription]);

  useEffect(() => {
    const storedEditBorder = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY_EDIT_BORDER)
    );
    if (storedEditBorder) setEditBorder(storedEditBorder);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE_KEY_EDIT_BORDER,
      JSON.stringify(editBorder)
    );
  }, [editBorder]);

  useEffect(() => {
    const storedEditGlobal = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY_EDIT_GLOBAL)
    );
    if (storedEditGlobal) setEditGlobal(storedEditGlobal);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE_KEY_EDIT_GLOBAL,
      JSON.stringify(editGlobal)
    );
  }, [editGlobal]);

  useEffect(() => {
    const storedEditImage = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY_EDIT_IMAGE)
    );
    if (storedEditImage) setEditImage(storedEditImage);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE_KEY_EDIT_IMAGE,
      JSON.stringify(editImage)
    );
  }, [editImage]);

  useEffect(() => {
    const storedSaved = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_SAVED_CUSTOM));
    if (storedSaved) setSaved(storedSaved);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_SAVED_CUSTOM, JSON.stringify(saved));
  }, [saved]);

  useEffect(() => {
    const storedSelected = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_SELECTED_CUSTOM));
    if (storedSelected) setSelected(storedSelected);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_SELECTED_CUSTOM, JSON.stringify(selected));
  }, [selected]);

  useEffect(() => {
    const adImage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_IMAGE));
    if (adImage) setMediaPreview(adImage);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_IMAGE, JSON.stringify(mediaPreview));
  }, [mediaPreview]);

  useEffect(() => {
    const url = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_URL));
    if (url) setUrl(url);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_URL, JSON.stringify(url));
  }, [url]);

  useEffect(() => {
    const full = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_FULL));
    if (full) setFull(full);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_FULL, JSON.stringify(full));
  }, [full]);

  return <></>;
}

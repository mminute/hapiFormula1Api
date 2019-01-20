export default classifications => [
  ...new Set(classifications.map(classification => classification.driver)),
];

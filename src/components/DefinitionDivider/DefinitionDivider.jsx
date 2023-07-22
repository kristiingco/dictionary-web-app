import "./DefinitionDivider.scss";
const DefinitionDivider = ({ partOfSpeech }) => {
  return (
    <div className='definition__divider'>
      <span>{partOfSpeech}</span> <hr />
    </div>
  );
};

export default DefinitionDivider;

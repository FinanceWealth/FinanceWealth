import '../../styles/defaults.scss';

const DevContainer = ({path, name, description}) => {
    return(
        <div className="devContainer">
            <a href={path}>{name}</a>
            <span>{path}</span>
            {description ? <p>{description}</p> : null}
        </div>
    );
};

export default DevContainer;
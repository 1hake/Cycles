import React, { useContext } from "react";
import { MyContext } from "../../stores/Context";
import { FaMapMarkerAlt, FaCube, FaEuroSign, FaRegClock } from "react-icons/fa";


export const ProjectInfo = () => {
    const {
        dispatch,
        state: { panelOpen, currentPanel },
    } = useContext(MyContext);


    return (
        <div style={classes.projectInfo}>
            <div style={classes.item}>
                <div style={classes.icon}>
                    <FaMapMarkerAlt style={{ marginLeft: '15px' }} color={'black'} size={'2em'}></FaMapMarkerAlt>
                </div>
                <span style={classes.text}>Paris</span>
            </div>
            <div style={classes.item}>
                <div style={classes.icon}>
                    <FaCube style={{ marginLeft: '15px' }} color={'black'} size={'2em'}></FaCube>
                </div>

                <span style={classes.text}>8000 m2</span>
            </div>
            <div style={classes.item}>
                <div style={classes.icon}>
                    <FaEuroSign style={{ marginLeft: '15px' }} color={'black'} size={'2em'}></FaEuroSign>
                </div>
                <span style={classes.text}>500.000</span>
            </div>
            <div style={classes.item}>
                <div style={classes.icon}>
                    <FaRegClock style={{ marginLeft: '15px' }} color={'black'} size={'2em'}></FaRegClock>
                </div>
                <span style={classes.text}>2020</span>
            </div>
        </div >)
};

const classes = {
    projectInfo: {
        width: '11vw',
        height: "20vh",
        display: "flex",
        padding: '5px',
        justifyContent: "center",
        alignItems: "center",
        left: 0,
        position: 'absolute',
        marginLeft: '30px',
        flexDirection: 'column',
        backgroundColor: 'white',
        border: '2px solid black'
    },
    image: {
        height: '20px',
    },
    item: {
        width: '12vw',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        marginRight: '20px',
        display: "flex",
        fontFamily: "Source Sans Pro",
        color: 'black',
        fontWeight: "bold",
        fontSize: '1.1rem'

    },
    icon: {
        padding: '5px'
    }
}

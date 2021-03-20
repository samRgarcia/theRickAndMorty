import React from 'react';
import {connect} from 'react-redux';
import {setModals, setIdEdit, setDataEliminar} from '../actions/index';
import CardPresent from "../components/CardPresent";
import Carrusels from "../components/Carrusel";
import Paginacion from "../components/Paginacion";
import '../assets/components/home.css';
import FortEdit from "../components/FormEdit";
import CreatePerfil from "../components/CreatePefil";

const Home = ({setModals, setIdEdit, setDataEliminar, resultCard}) => {


    const handleditar = (evt) => {
        setIdEdit(evt)
        setModals(true)
    }
    const handlEliminar = (evt) => {
        setDataEliminar(evt)
    }

    return (
        <React.Fragment>
            <Carrusels/>
            <div className="card-flexs card-flexs-size">
                {
                    resultCard.length && resultCard.map(item => (
                        <CardPresent
                            key={item.id}
                            id={item.id}
                            image={item?.image}
                            Title={item?.name}
                            species={item?.species}
                            onClick={handleditar}
                            onClickEliminar={handlEliminar}
                        />
                    ))
                }
            </div>
            <Paginacion/>
            <CreatePerfil/>
            <FortEdit/>
        </React.Fragment>

    )
}
const mapDispatchToProps = {
    setModals,
    setIdEdit,
    setDataEliminar
}

const mapStateToProps = state => {
    return {
        resultCard: state.resultCard,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);

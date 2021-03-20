import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {setPaginacionCount, setPageCount} from '../actions';
import {Pagination} from 'antd';

const Paginacion = ({setPaginacionCount, setPageCount, page,result}) => {

    useEffect(() => {
        onChange(page)
    }, [result]);

    const onChange = page => {
        let start = (5 * page) - 5;
        let end = 5 * page;
        setPaginacionCount({start, end})
        setPageCount(page)

    };

    return (
        <Pagination
            style={{margin:'auto'}}
            current={page}
            onChange={onChange}
            total={50}/>);
}

const mapStateToProps = state => {
    return {
        page: state.page,
        result:state.result,
    }
}
const mapDispatchToProps = {
    setPaginacionCount,
    setPageCount,
}
export default connect(mapStateToProps, mapDispatchToProps)(Paginacion);

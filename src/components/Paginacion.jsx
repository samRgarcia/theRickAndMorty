import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {setPaginacionCount, setPageCount} from '../actions';
import {Pagination} from 'antd';

const Paginacion = ({setPaginacionCount, setPageCount, page,result}) => {

    useEffect(() => {
        onChange(page)
    }, [result]);

    const onChange = page => {
        let start = (10 * page) - 10;
        let end = 10 * page;
        setPaginacionCount({start, end})
        setPageCount(page)

    };

    return (
        <Pagination
            style={{margin:'auto'}}
            current={page}
            onChange={onChange}
            total={result.length}/>);
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

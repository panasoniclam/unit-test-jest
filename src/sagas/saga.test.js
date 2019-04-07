import * as TYPE from './../constands/index'
import {takeEvery} from 'redux-saga/effects'

function * startTest(){
    yield console.log('lamnn');
};

function * watchTest(){
    yield takeEvery(TYPE.TEST,startTest);
}

export  {
    watchTest
}
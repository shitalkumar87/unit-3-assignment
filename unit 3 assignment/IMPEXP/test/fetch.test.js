import { getdata } from "../script/random";

test('testing fetching of data', ()=>{

    getdata('https://www.themealdb.com/api/json/v1/1/random.php').then((res)=>{

    expect(res).toEqual(data);

    });

    //https://www.themealdb.com/api/json/v1/1/random.php

});
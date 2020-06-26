function main (params) {
   return difference(
       union(
           cube({size: [18,12,3], center: [true,true,false]}),
           cube({size: [10,8.6,2], center: [true,true,false]}).translate ([0,0,3]),
           cylinder({r: 4.3, h: 4,center: [true,true,false]}).translate ([0,0,5]),
           cylinder({r1: 4.3, r2: 3, h: 4,center: [true,true,false]}).translate ([0,0,9])
        ),
        cylinder({r: 2.5, h: 13,center: [true,true,false]}),
        torus({ ri: 1.8, ro: 5.4 ,center: [true,true,true]}).translate ([0,0,7]),
        rectangular_extrude([[9,6], [-9,-6]],{w: 0.6, h: 20, fn:0, closed: false}).translate ([0,0,5]),
        rectangular_extrude([[9,-6], [-9,6]],{w: 0.6, h: 20, fn:0, closed: false}).translate ([0,0,5])
    );
}




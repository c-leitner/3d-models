function getParameterDefinitions() {
  return [{ name: 'res', type: 'float', initial: 20, caption: "Resolution:" },
		 { name: 'nFans', type: 'float', caption: 'Number of Fans', default: 4 },
		 { name: 'rFan', type: 'float', caption: 'Inner Fan Radius', default: 18.6 }
  ];
}

function fanArray(params) {
    var initFan = difference(
    cube({size: [40,40,3], center: [true,true,false]}),
    cylinder({r: params.rFan, h: 3, center: [true, true, false],fn: params.res}),
    cylinder({r:2.5,h: 3,center: [true, true, false],fn: params.res}).translate([16,16,0]),
    cylinder({r1: 2.5, r2: 3.2, center: [true, true, false], h: 1.5,fn: params.res}).translate([16,16,1.5]),
    cylinder({r:2.5,h: 3,center: [true, true, false],fn: params.res}).translate([-16,16,0]),
    cylinder({r1: 2.5, r2: 3.2, center: [true, true, false], h: 1.5,fn: params.res}).translate([-16,16,1.5]),
    cylinder({r:2.5,h: 3,center: [true, true, false],fn: params.res}).translate([-16,-16,0]),
    cylinder({r1: 2.5, r2: 3.2, center: [true, true, false], h: 1.5,fn: params.res}).translate([-16,-16,1.5]),
    cylinder({r:2.5,h: 3,center: [true, true, false],fn: params.res}).translate([16,-16,0]),
    cylinder({r1: 2.5, r2: 3.2, center: [true, true, false], h: 1.5,fn: params.res}).translate([16,-16,1.5])
    );
    var tempFan = new Array(params.nFans);
    for (i = 0; i < params.nFans; i++) {
         tempFan[i]=(initFan.translate([(i*40),0,0]));
    }
     return union(tempFan);
}


function main (params) {
    return union(
        fanArray(params),
        difference(
         cube({size: [10,3,10]}),
         cylinder({r:1.6,h: 3}).rotateX(90).translate([5,3,4.25]),
         cylinder({r: 3.3, center: [true, true, false], h: 10,fn: params.res}).translate([2.5,-1,0])
         ).translate([21.5,17,3])
    );
}

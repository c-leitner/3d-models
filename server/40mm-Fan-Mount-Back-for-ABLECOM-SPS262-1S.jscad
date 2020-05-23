function getParameterDefinitions() {
  return [{ name: 'res', type: 'float', initial: 20, caption: "Resolution:" }
  ];
}

function main (params) {
    return union(
    difference(
    cube({size: [40,40,3], center: [true,true,false]}),
    difference(
        cylinder({r: 19.5, h: 3, center: [true, true, false],fn: params.res}),
        cube({size: [10,0.6,3], center: [true,false,false]}).translate([0,18.9,0]),
        cube({size: [10,0.6,3], center: [true,false,false]}).translate([0,-19.5,0]),
        cube({size: [0.6,10,3], center: [false,true,false]}).translate([18.9,0,0]),
        cube({size: [0.6,10,3], center: [false,true,false]}).translate([-19.5,0,0])
    ),
    cylinder({r:2.5,h: 3,center: [true, true, false],fn: params.res}).translate([16,16,0]),
    cylinder({r1: 2.5, r2: 3.2, center: [true, true, false], h: 1.5,fn: params.res}).translate([16,16,1.5]),
    cylinder({r:2.5,h: 3,center: [true, true, false],fn: params.res}).translate([-16,16,0]),
    cylinder({r1: 2.5, r2: 3.2, center: [true, true, false], h: 1.5,fn: params.res}).translate([-16,16,1.5]),
    cylinder({r:2.5,h: 3,center: [true, true, false],fn: params.res}).translate([-16,-16,0]),
    cylinder({r1: 2.5, r2: 3.2, center: [true, true, false], h: 1.5,fn: params.res}).translate([-16,-16,1.5]),
    cylinder({r:2.5,h: 3,center: [true, true, false],fn: params.res}).translate([16,-16,0]),
    cylinder({r1: 2.5, r2: 3.2, center: [true, true, false], h: 1.5,fn: params.res}).translate([16,-16,1.5])
    ),
    difference(
    cube({size:[6.2,15,3]}).translate([20,5,0]),
    cylinder({r:1.8,h:3}).translate([23.75,8,0])
    ),
    difference(
    cube({size:[20,6,3]}).translate([-40,5,0]),
    cylinder({r:1.8,h:3}).translate([-36.75,8,0]),
    cube({size:[20,6,0.8]}).translate([-40,5,2.2])
    )
    );    

}

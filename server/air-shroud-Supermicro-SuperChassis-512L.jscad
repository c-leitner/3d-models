function getParameterDefinitions() {
  return [{ name: 'res', type: 'float', initial: 20, caption: "Resolution:" }
  ];
}

function main (params) {
    return union(
    difference(
    rectangular_extrude([ [0,0], [0,135], [-45,157]],
    {w: 3, h: 40, fn: params.res, closed: false}),
    cube({size: [5,10,2],fn: params.res, round: true,center: [true,false,false]}).translate([0,-2.5,39]),
    cube({size: [5,12,5], center: [true,false,false]}).translate([0,12,0]),
    cube({size: [5,40,10], fn: params.res, round: true, center: [true,false,false]}).translate([0,85,35]),
    cube({size: [-45,30,6], fn: params.res, round: false, center: [false,false,false]}).translate([-1.5,132.5,0])
    )
    );

}

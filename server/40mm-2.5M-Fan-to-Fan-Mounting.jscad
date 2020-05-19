function getParameterDefinitions() {
  return [{ name: 'res', type: 'float', initial: 20, caption: "Resolution:" }
  ];
}

function main (params) {
    return union(
    difference(
    rectangular_extrude([ [0,0], [0,8]],
    {w: 8, h: 3, fn: params.res, closed: false}),
    cylinder({r: 1.5, h: 4, center: [true,true,false]}).translate([0,0,0]),
    cylinder({r: 1.5, h: 4, center: [true,true,false]}).translate([0,8,0]),
    linear_extrude({height:4},polygon([ [0,2.9],[2.5,1.45],[2.5,-1.45],[0,-2.9],[-2.5,-1.45],[-2.5,1.45]])).translate([0,0,1]),
    linear_extrude({height:4},polygon([ [0,2.9],[2.5,1.45],[2.5,-1.45],[0,-2.9],[-2.5,-1.45],[-2.5,1.45]])).translate([0,8,1])
    ),
    difference(
    rectangular_extrude([ [0,0], [0,8]],
    {w: 8, h: 3, fn: params.res, closed: false}),
    cylinder({r: 1.5, h: 4, center: [true,true,false]}).translate([0,0,0]),
    cylinder({r: 1.5, h: 4, center: [true,true,false]}).translate([0,8,0]),
    cylinder({r: 2.4, h: 4, center: [true,true,false]}).translate([0,0,0.8]),
    cylinder({r: 2.4, h: 4, center: [true,true,false]}).translate([0,8,0.8])
    ).translate([10,0,0])
    );

}

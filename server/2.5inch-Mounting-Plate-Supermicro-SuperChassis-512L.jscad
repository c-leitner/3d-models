function getParameterDefinitions() {
  return [{ name: 'res', type: 'float', initial: 20, caption: "Resolution:" }
  ];
}

function main (params) {
    return union(
    difference(
    rectangular_extrude([ [0,30.675], [20,46.125], [52,46.125], [76.15,30.675]],
    {w: 8, h: 4, fn: params.res, closed: false}),
    cylinder({r:1.6,h:4,center:true, fn: params.res}).translate([0,30.675,2]),
    cylinder({r:4,h:3,center:true, fn: params.res}).translate([0,30.675,1.5]),
    cylinder({r:1.5,h:4,center:true, fn: params.res}).translate([20,46.125,2]),
    cylinder({r:1.5,h:4,center:true, fn: params.res}).translate([52,46.125,2]),
    cylinder({r:1.6,h:4,center:true, fn: params.res}).translate([76.15,30.675,2]),
    cylinder({r:4,h:3,center:true, fn: params.res}).translate([76.15,30.675,1.5])
    ),
    difference(
    rectangular_extrude([ [0,-30.675], [20,-46.125], [52,-46.125], [76.15,-30.675]],
    {w: 8, h: 4, fn: params.res, closed: false}),
    cylinder({r:1.6,h:4,center:true, fn: params.res}).translate([0,-30.675,2]),
    cylinder({r:4,h:3,center:true, fn: params.res}).translate([0,-30.675,1.5]),
    cylinder({r:1.5,h:4,center:true, fn: params.res}).translate([20,-46.125,2]),
    cylinder({r:1.5,h:4,center:true, fn: params.res}).translate([52,-46.125,2]),
    cylinder({r:1.6,h:4,center:true, fn: params.res}).translate([76.15,-30.675,2]),
    cylinder({r:4,h:3,center:true, fn: params.res}).translate([76.15,-30.675,1.5])
    ).translate([0,50,0])
    );

}

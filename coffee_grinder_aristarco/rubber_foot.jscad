function getParameterDefinitions() {
  return [{ name: 'res', type: 'float', initial: 20, caption: "Resolution:" }
  ];
}
function main (params) {
 return union( 
    cube({size: [30,12,6],round: [true,true,false], fn: params.res}),
    cube({size: [24,4.25,16],round: true, fn: params.res}).translate([3,0,4]),
    cube({size: [24,4.25,16],round: true, fn: params.res}).translate([3,7.75,4]),
    cube({size: [9,4,8],round: false, fn: params.res}).translate([10.5,4,6])
 );
}

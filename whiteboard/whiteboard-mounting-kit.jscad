function getParameterDefinitions() {
  return [{ name: 'res', type: 'float', initial: 20, caption: "Resolution:" },
		 { name: 'screwS', type: 'float', caption: 'Screw Size', default: 4 },
		 { name: 'width', type: 'float', caption: 'Total Width', default: 40 },
		 { name: 'bh', type: 'float', caption: 'Bottom wall thickness', default: 4 },
		 { name: 'bf', type: 'float', caption: 'Slider total height', default: 3.5 },
		 { name: 'sf', type: 'float', caption: 'Slider thickness', default: 1.8 },
		 { name: 'sw', type: 'float', caption: 'Slider width', default: 8 },
		 { name: 'sh', type: 'float', caption: 'Slider inner height', default: 1.7 },
		 { name: 't',  type: 'checkbox', checked: true,caption: 'Enabel T for profile' ,default: true }
  ];
}



function main (params) {
    var screw = union(
        cylinder({r1: (8.6+0.2)/2, r2: (4.5+0.1)/2, h: 2.5,fn:params.res, center: [true, true, false]}).rotateY(90),
        cylinder({r: (4.5+0.1)/2, h: 6,fn:params.res, center: [true, true, false]}).rotateY(90)
        );
        var c = 10
        var m = 2;
        var screwout = new Array(c*m);
        for (i = 0; i < c; i=i+0.5) {
            screwout[i*2] = union(
                cylinder({r:(8.6+0.2)/2, h: 1,fn:params.res, center: [true, true, false]}).rotateY(90).translate([0,0,i]),
                cylinder({r1: (8.6+0.2)/2, r2: (4.5+0.1)/2, h: 2.5,fn:params.res, center: [true, true, false]}).rotateY(90).translate([1,0,i]),
                cylinder({r: (4.5+0.1)/2, h: 6,fn:params.res, center: [true, true, false]}).rotateY(90).translate([0,0,i])
            );
        }
    
    return union(
         cube({size: [8.8,params.width,params.bh],center: [false, true, false]}),
         cube({size: [2,params.width,params.bf],center: [false, true, false]}).translate([0,0,params.bh]),
         cube({size: [params.sw,params.width,params.sh],center: [false, true, false]}).translate([-params.sw/2+1,0,params.bh+params.bf]),
         difference(
         cube({size: [params.bh+2,params.width,32],center: [false, true, false]}).translate([8.8,0,0]),
         union(screwout).translate([8.8,0,14])
         )
    ).rotateX(90).translate([0,0,params.width/2]);
}

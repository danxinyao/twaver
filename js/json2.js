var nodes = 
{
	nodes: [
		{
			groupId: 'group1',
			outlineWidth: 1,
			outlineColor: 'red',
			childrens: [
				{
					id: 'group1_vlan1',
					type: 'node',
					name: 'VLAN1：198.120.0.0/16',
					name2: '<div class="left_title">站控层A网</div>',
					image: 'vlan1',
					childrens: [
						{
							id: 'group1_vlan1_1',
							image: 'sb1',
						},
						{
							id: 'group1_vlan1_2',
							image: 'sb1',
						},
						{
							id: 'group1_vlan1_3',
							image: 'sb2',
						},
					]
				},
				{
					id: 'group1_vlan2',
					type: 'node',
					name: 'VLAN1：198.120.0.0/16',
					name2: '<div class="left_title">站控层B网</div>',
					image: 'vlan2',
					childrens: [
						{
							id: 'group1_vlan2_1',
							image: 'sb1',
						},
						{
							id: 'group1_vlan2_2',
							image: 'sb1',
						},
						{
							id: 'group1_vlan2_3',
							image: 'sb2',
						},
					]
				},
				{
					id: 'group1_vlan3',
					type: 'node',
					name: 'VLAN3：198.120.0.0/16',
					name2: '<div class="left_title">站控层C网</div>',
					image: 'vlan3',
					childrens: [
						{
							id: 'group1_vlan3_1',
							image: 'sb1',
						},
						{
							id: 'group1_vlan3_2',
							image: 'sb1',
						},
						{
							id: 'group1_vlan3_3',
							image: 'sb1',
							childrens: [
								{
									id: 'group1_vlan3_4',
									image: 'sb1',
								},
								{
									id: 'group1_vlan3_4',
									image: 'sb1',
								},
								{
									id: 'group1_vlan3_4',
									image: 'sb1',
								},
							]
						},
						{
							id: 'group1_vlan3_4',
							image: 'sb1',
						},
						{
							id: 'group1_vlan3_5',
							image: 'sb2',
						},
						{
							id: 'group1_vlan3_6',
							image: 'sb2',
						},
						{
							id: 'group1_vlan3_7',
							image: 'sb2',
						},
						{
							id: 'group1_vlan3_8',
							image: 'sb2',
						},
						{
							id: 'group1_vlan3_9',
							image: 'sb2',
						},
						{
							id: 'group1_vlan3_10',
							image: 'sb2',
						},
						{
							id: 'group1_vlan3_11',
							image: 'sb2',
						},
						{
							id: 'group1_vlan3_12',
							image: 'sb2',
						},
					]
				},
				{
					id: 'group1_vlan4',
					type: 'node',
					name: 'VLAN1：198.120.0.0/16',
					name2: '<div class="left_title">站控层B网</div>',
					image: 'vlan2',
					childrens: [
						{
							id: 'group1_vlan4_1',
							image: 'sb1',
						},
						{
							id: 'group1_vlan4_2',
							image: 'sb1',
						},
						{
							id: 'group1_vlan4_3',
							image: 'sb2',
						},
					]
				},
				{
					id: 'group1_vlan5',
					type: 'node',
					name: 'VLAN1：198.120.0.0/16',
					name2: '<div class="left_title">站控层B网</div>',
					image: 'vlan2',
					childrens: [
						{
							id: 'group1_vlan5_1',
							image: 'sb1',
						},
						{
							id: 'group1_vlan5_2',
							image: 'sb1',
						},
						{
							id: 'group1_vlan5_3',
							image: 'sb2',
						},
					]
				},
			]
		},
		{
			groupId: 'group2',
			outlineWidth: 1,
			outlineColor: '#ccc',
			childrens: [
				{
					id: 'group2_vlan1',
					type: 'node',
					name: 'VLAN1：198.120.0.0/16',
					name2: '<div class="left_title">站控层AA网</div>',
					image: 'vlan1',
				},
				{
					id: 'group2_vlan2',
					type: 'node',
					name: 'VLAN1：198.120.0.0/16',
					name2: '<div class="left_title">站控层BA网</div>',
					image: 'vlan2',
				},
				{
					id: 'group2_vlan3',
					type: 'node',
					name: 'VLAN1：198.120.0.0/16',
					name2: '<div class="left_title">站控层BA网</div>',
					image: 'vlan3',
					x: 200,
					y: 650,
					labelPosition: 'center',
					labelFont: '18px arial',
					labelColor: null,
					label2Position: 'center',
					label2Font: '24px arial',
					label2Color: 'green',
					childrens: [
						{
							id: 'group2_node1_1',
							image: 'sb1',
							x: 200,
							y: 750,
						},
					]
				},
			]
		},
		{
			groupId: 'group3',
			outlineWidth: 1,
			outlineColor: '#ccc',
			childrens: [
				{
					id: 'group3_vlan1',
					type: 'node',
					name: 'VLAN1：198.120.0.0/16',
					name2: '<div class="left_title">站控层AA网</div>',
					image: 'vlan1',
					childrens: [
						{
							id: 'group3_node1_1',
							image: 'sb1',
							x: 200,
							y: 750,
						},
					]
				},
			]
		},

	],
	links: [
		{
			id:'1',
			color: 'red',
			fromPosition: 'bottom.bottom',
			fromNode: 'group1_node1',
			toNode: 'group1_node2'
		},
		{
			id:'2',
			color: 'green',
			fromNode: 'group1_node2',
			toNode: 'group1_node3'
		},
		{
			id:'3',
			color: '#333',
			fromNode: 'group1_node3',
			toNode: 'group1_node4'
		},
		{
			id:'4',
			fromNode: 'group1_node4',
			toNode: 'group1_node5'
		},
		{
			id:'5',
			color: 'blue',
			type: 'orthogonal.horizontal',
			fromPosition: 'top.top',
			toPosition: 'top.top',
			splitPercent: 0,
			fromXoffset: -10,
			fromNode: 'group1_node5',
			toNode: 'group1_node6'
		},
		{
			id:'6',
			color: 'blue',
			type: 'orthogonal.horizontal',
			fromPosition: 'top.top',
			toPosition: 'top.top',
			splitPercent: 0,
			fromXoffset: -10,
			fromNode: 'group1_node5',
			toNode: 'group1_node7'
		},
		{
			id:'7',
			color: 'blue',
			type: 'orthogonal.horizontal',
			fromPosition: 'top.top',
			toPosition: 'top.top',
			splitPercent: 0,
			fromXoffset: 10,
			fromNode: 'group1_node3',
			toNode: 'group1_node8'
		},
		{
			id:'8',
			color: 'blue',
			type: 'orthogonal.horizontal',
			fromPosition: 'top.top',
			fromXoffset: 10,
			toPosition: 'top.top',
			splitPercent: 0,
			fromNode: 'group1_node3',
			toNode: 'group1_node9'
		},
		//右侧分区连线 
		{
			id:'21',
			color: 'red',
			fromXoffset: 65,
			fromPosition: 'bottom.bottom',
			fromNode: 'group2_node1',
			toNode: 'group2_node2'
		},
		{
			id:'22',
			color: 'blue',
			type: 'orthogonal.horizontal',
			fromPosition: 'top.top',
			toPosition: 'top.top',
			splitPercent: 0,
			fromXoffset: -10,
			fromNode: 'group2_node2',
			toNode: 'group2_node3'
		},
		{
			id:'23',
			color: 'blue',
			type: 'orthogonal.horizontal',
			fromPosition: 'top.top',
			toPosition: 'top.top',
			splitPercent: 0,
			fromNode: 'group2_node2',
			toNode: 'group2_node4'
		},
		{
			id:'24',
			color: 'blue',
			type: 'orthogonal.horizontal',
			fromPosition: 'top.top',
			toPosition: 'top.top',
			splitPercent: 0,
			fromXoffset: -10,
			fromNode: 'group2_node2',
			toNode: 'group2_node5'
		},
		{
			id:'25',
			color: 'blue',
			type: 'orthogonal.horizontal',
			fromPosition: 'top.top',
			toPosition: 'top.top',
			splitPercent: 0,
			fromXoffset: -10,
			fromNode: 'group2_node6',
			toNode: 'group2_node3'
		},
		{
			id:'26',
			color: 'blue',
			type: 'orthogonal.horizontal',
			fromPosition: 'top.top',
			toPosition: 'top.top',
			splitPercent: 0,
			fromNode: 'group2_node6',
			toNode: 'group2_node4'
		},
		{
			id:'27',
			color: 'blue',
			type: 'orthogonal.horizontal',
			fromPosition: 'top.top',
			toPosition: 'top.top',
			splitPercent: 0,
			fromXoffset: -10,
			fromNode: 'group2_node6',
			toNode: 'group2_node5'
		},
		{
			id:'28',
			color: 'blue',
			type: 'orthogonal.horizontal',
			fromPosition: 'top.top',
			toPosition: 'top.top',
			splitPercent: 0,
			fromNode: 'group1_htmlNode1',
			toNode: 'group3_node1'
		},
		{
			id:'29',
			color: 'blue',
			type: 'orthogonal.horizontal',
			fromPosition: 'top.top',
			toPosition: 'top.top',
			splitPercent: 0,
			fromNode: 'group1_htmlNode1',
			toNode: 'group3_node2'
		},
		{
			id:'30',
			color: 'blue',
			type: 'orthogonal.horizontal',
			fromPosition: 'top.top',
			toPosition: 'top.top',
			splitPercent: 0,
			fromNode: 'group1_htmlNode1',
			toNode: 'group3_node3'
		},
		{
			id:'31',
			color: 'blue',
			type: 'orthogonal.horizontal',
			fromPosition: 'top.top',
			toPosition: 'top.top',
			splitPercent: 0,
			fromXoffset: -10,
			fromNode: 'group1_node5',
			toNode: 'group1_htmlNode1'
		},
	]
}
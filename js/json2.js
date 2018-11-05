var nodes = 
{
	nodes: [
		{
			groupId: 'group1',//分区id唯一标识
			children: [ //分区下方的vlan个数数组
				{
					id: 'group1_vlan1',//vlan的id唯一标识
					name: 'VLAN1：198.120.0.0/16', //vlan上面的文字
					name2: '<div class="left_title">站控层A网</div>',//vlan左侧的文字
					image: 'vlan_blue',//vlan用哪个图片渲染 
					children: [ //vlan下发挂着的设备个数数组
						{
							id: 'group1_vlan1_1',//设备id
							deviceCode: 'sb1',//设备用哪个图片渲染//设备类型
							name: '172.16.14',
							links: ['group1_vlan1','group1_vlan2']//该设备连接那个vlan(id组)
						},
						{
							id: 'group1_vlan1_2',//设备需要分组时的唯一标识
							image: 'sb1',//设备分组用哪个图片渲染
							name: '检查装置',//设备分组下方的文字描述
							name2: '172.16.2822\n23333333\n...',//设备分组下上方的文字描述
							children: [//设备分组内包含的子设备数组
								{
									id: 'group1_vlan1_2_1',//设备分组内包含的子设备唯一标识
									image: 'sb1',//设备分组内包含的子设备用哪个图片渲染
								},
								{
									id: 'group1_vlan1_2_2',
									image: 'sb1',
								},
								{
									id: 'group1_vlan1_2_3',
									image: 'sb1',
								},
								{
									id: 'group1_vlan1_2_4',
									image: 'sb1',
								},
							]
						},
						{
							id: 'group1_vlan1_3',
							image: 'sb2',
						},
					]
				},
				{
					id: 'group1_vlan2',
					name: 'VLAN1：198.120.0.0/16',
					name2: '<div class="left_title">站控层B网</div>',
					image: 'vlan_green',
					children: [
						{
							id: 'group1_vlan2_1',
							image: 'sb1',
							links: ['group1_vlan1','group1_vlan2']
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
					image: 'vlan_pink',
					children: [
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
							name: '文字描述',//设备分组下方的文字描述
							name2: '172.16.2822\n23333333\n...',//设备分组下上方的文字描述
							links: ['group1_vlan1','group1_vlan2','group1_vlan3','group1_vlan4'],
							children: [
								{
									id: 'group1_vlan3_41',
									image: 'sb1',
								},
								{
									id: 'group1_vlan3_42',
									image: 'sb1',
								},
								{
									id: 'group1_vlan3_43',
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
							links: ['group1_vlan1','group1_vlan2','group1_vlan3','group1_vlan4']
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
					image: 'vlan_purple',
					children: [
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
					image: 'vlan_yellow',
					children: [
						{
							id: 'group1_vlan5_1',
							image: 'sb1',
						},
						{
							id: 'group1_vlan5_2',
							image: 'sb1',
							links: ['group1_vlan1','group1_vlan2']
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
			children: [
				{
					id: 'group2_vlan1',
					type: 'node',
					name: 'VLAN1：198.120.0.0/16',
					name2: '<div class="left_title">站控层AA网</div>',
					image: 'vlan_blue',
				},
				{
					id: 'group2_vlan2',
					type: 'node',
					name: 'VLAN1：198.120.0.0/16',
					name2: '<div class="left_title">站控层BA网</div>',
					image: 'vlan_green',
				},
				{
					id: 'group2_vlan3',
					type: 'node',
					name: 'VLAN1：198.120.0.0/16',
					name2: '<div class="left_title">站控层BA网</div>',
					image: 'vlan_pink',
					x: 200,
					y: 650,
					labelPosition: 'center',
					labelFont: '18px arial',
					labelColor: null,
					label2Position: 'center',
					label2Font: '24px arial',
					label2Color: 'green',
					children: [
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
			children: [
				{
					id: 'group3_vlan1',
					type: 'node',
					name: 'VLAN1：198.120.0.0/16',
					name2: '<div class="left_title">站控层AA网</div>',
					image: 'vlan_blue',
					children: [
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
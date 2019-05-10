define({
  "Sheet1": [
    {
      "模块": "BAS",
      "数据集名称": "HYMII/BAS/factory_qry",
      "描述": "公司基础数据",
      "数据范围": "全部",
      "参数名称": "无",
      "参数说明": "无",
      "用例模块": "全局",
      "数据源": "应急联动",
      "数据来源": "bas_factory",
      "数据来源描述": "基础工厂维表"
    },
    {
      "模块": "BAS",
      "数据集名称": "HYMII/BAS/material_qry",
      "描述": "物料基础数据",
      "数据范围": "全部",
      "参数名称": "无",
      "参数说明": "无",
      "用例模块": "全局",
      "数据源": "应急联动",
      "数据来源": "bas_material",
      "数据来源描述": "基础物料维表"
    },
    {
      "模块": "BAS",
      "数据集名称": "HYMII/BAS/product_qry",
      "描述": "产品数据",
      "数据范围": "全部",
      "参数名称": "无",
      "参数说明": "无",
      "用例模块": "生产绩效",
      "数据源": "应急联动",
      "数据来源": "V_MII_PRODUCT",
      "数据来源描述": "工厂产品关系视图"
    },
    {
      "模块": "BAS",
      "数据集名称": "HYMII/BAS/raw_qry",
      "描述": "原料数据",
      "数据范围": "全部",
      "参数名称": "无",
      "参数说明": "无",
      "用例模块": "原料库存",
      "数据源": "应急联动",
      "数据来源": "V_MII_RAW",
      "数据来源描述": "原料视图"
    },
    {
      "模块": "BAS",
      "数据集名称": "HYMII/BAS/unit_qry",
      "描述": "装置数据",
      "数据范围": "全部",
      "参数名称": "无",
      "参数说明": "无",
      "用例模块": "运行监控、公司总览",
      "数据源": "应急联动",
      "数据来源": "V_MII_UNIT",
      "数据来源描述": "装置视图"
    },
    {
      "模块": "BAS",
      "数据集名称": "HYMII/BAS/equ_qry",
      "描述": "设备数据",
      "数据范围": "全部",
      "参数名称": "无",
      "参数说明": "无",
      "用例模块": "运行监控、公司总览",
      "数据源": "应急联动",
      "数据来源": "V_MII_EQU",
      "数据来源描述": "设备视图"
    },
    {
      "模块": "BAS",
      "数据集名称": "HYMII/BAS/storage_area_qry",
      "描述": "存储区域数据",
      "数据范围": "全部",
      "参数名称": "无",
      "参数说明": "无",
      "用例模块": "罐区监控",
      "数据源": "应急联动",
      "数据来源": "v_mii_storage_area",
      "数据来源描述": "存储区域视图"
    },
    {
      "模块": "BAS",
      "数据集名称": "HYMII/BAS/storage_block_qry",
      "描述": "存储单元数据",
      "数据范围": "全部",
      "参数名称": "无",
      "参数说明": "无",
      "用例模块": "罐区监控",
      "数据源": "应急联动",
      "数据来源": "v_mii_storage_block",
      "数据来源描述": "存储模块"
    },
    {
      "模块": "PM",
      "数据集名称": "HYMII/PM/production_ensemble_qry",
      "描述": "产品综合日报",
      "数据范围": "MII中设置日期",
      "参数名称": "Param.1=INPUT_TIME\nParam.2\nParam.3=PRODUCT_ID\nParam.4\nParam.5=FACTORY_ID\nParam.6\nParam.7\nParam.8=STATUS\nParam.9",
      "参数说明": "Param.1: 2013-03-15,日报日期，不传该参数时，默认MII中已设置'2013-03-15'减一天，传递空时(Param.1=)，默认为当前系统时间减一天\nParam.2: -1,日报日期增减天数,默认-1表示减一天\nParam.3: 产品id，默认不传，传递该参数时，需要同时传递Param.4=\nParam.4: --,产品id参数注释,默认注释生效，不注释时传递Param.4=\nParam.5: 工厂id,默认不传，传递该参数时，需要同时传递Param.6=\nParam.6: --,工厂id参数注释，默认注释生效，不注释时传递Param.6=\nParam.7: fm999999999999990.00，精度格式,保留几位小数点后留几个零.不留表示不保留小数点，不传递该参数时，默认fm999999999999990\nParam.8: normal,产品数据状态,不传递该参数\nParam.9: --,产品数据状态参数注释，不传递该参数",
      "用例模块": "生产绩效",
      "数据源": "应急联动",
      "数据来源": "v_mii_product\nv_mii_production_ensemble",
      "数据来源描述": "工厂产品关系视图\n产品综合日报"
    },
    {
      "模块": "PM",
      "数据集名称": "HYMII/PM/production_trend_qry",
      "描述": "产品综合趋势日报",
      "数据范围": "日报日期前推30天",
      "参数名称": "\n\nParam.1=INPUT_TIME\nParam.2\nParam.3=PRODUCT_ID\nParam.4\nParam.5=FACTORY_ID\nParam.6\nParam.7\nParam.8=STATUS\nParam.9",
      "参数说明": "Param.1: 2013-03-15,日报日期，不传该参数时，默认MII中已设置'2013-03-15'减一天，传递空时(Param.1=)，默认为当前系统时间减一天\nParam.2: 30，趋势天数，默认日报日期往前推30天\nParam.3: 产品id，默认不传，传递该参数时，需要同时传递Param.4=\nParam.4: --,产品id参数注释,默认注释生效，不注释时传递Param.4=\nParam.5: 工厂id,默认不传，传递该参数时，需要同时传递Param.6=\nParam.6: --,工厂id参数注释，默认注释生效，不注释时传递Param.6=\nParam.7: fm999999999999990.00，精度格式,保留几位小数点后留几个零.不留表示不保留小数点，不传递该参数时，默认fm999999999999990\nParam.8: normal,产品数据状态,不传递该参数\nParam.9: --,产品数据状态参数注释，不传递该参数\n",
      "用例模块": "生产绩效",
      "数据源": "应急联动",
      "数据来源": "v_mii_product\nv_mii_production_ensemble",
      "数据来源描述": "工厂产品关系视图\n产品综合日报"
    },
    {
      "模块": "RM",
      "数据集名称": "HYMII/RM/raw_stock_qry",
      "描述": "原料库存日报",
      "数据范围": "MII中设置日期",
      "参数名称": "\nParam.1=INPUT_TIME\nParam.2\nParam.3=RAW_ID\nParam.4\nParam.5=FACTORY_ID\nParam.6\nParam.7\nParam.8=STATUS\nParam.9",
      "参数说明": "Param.1: 2013-03-15,日报日期，不传该参数时，默认MII中已设置'2013-03-15'减一天，传递空时(Param.1=)，默认为当前系统时间减一天\nParam.2: -1,日报日期增减天数,默认-1表示减一天\nParam.3: 原料id，默认不传，传递该参数时，需要同时传递Param.4=\nParam.4: --,原料id参数注释,默认注释生效，不注释时传递Param.4=\nParam.5: 工厂id,默认不传，传递该参数时，需要同时传递Param.6=\nParam.6: --,工厂id参数注释，默认注释生效，不注释时传递Param.6=\nParam.7: fm999999999999990.00，精度格式,保留几位小数点后留几个零.不留表示不保留小数点，不传递该参数时，默认fm999999999999990\nParam.8: normal,原料数据状态,不传递该参数\nParam.9: --,原料数据状态参数注释，不传递该参数",
      "用例模块": "原料库存",
      "数据源": "应急联动",
      "数据来源": "v_mii_raw\nv_mii_raw_stock_daily",
      "数据来源描述": "原料关系视图\n原料库存日报"
    },
    {
      "模块": "RM",
      "数据集名称": "HYMII/RM/raw_stock_trend_qry",
      "描述": "原料库存趋势",
      "数据范围": "日报日期前推30天",
      "参数名称": "\nParam.1=INPUT_TIME\nParam.2\nParam.3=RAW_ID\nParam.4\nParam.5=FACTORY_ID\nParam.6\nParam.7\nParam.8=STATUS\nParam.9",
      "参数说明": "Param.1: 2013-03-15,日报日期，不传该参数时，默认MII中已设置'2013-03-15'减一天，传递空时(Param.1=)，默认为当前系统时间减一天\nParam.2: 30，趋势天数，默认日报日期往前推30天\nParam.3: 原料id，默认不传，传递该参数时，需要同时传递Param.4=\nParam.4: --,原料id参数注释,默认注释生效，不注释时传递Param.4=\nParam.5: 工厂id,默认不传，传递该参数时，需要同时传递Param.6=\nParam.6: --,工厂id参数注释，默认注释生效，不注释时传递Param.6=\nParam.7: fm999999999999990.00，精度格式,保留几位小数点后留几个零.不留表示不保留小数点，不传递该参数时，默认fm999999999999990\nParam.8: normal,原料数据状态,不传递该参数\nParam.9: --,原料数据状态参数注释，不传递该参数\n",
      "用例模块": "原料库存",
      "数据源": "应急联动",
      "数据来源": "v_mii_raw\nv_mii_raw_stock_daily",
      "数据来源描述": "原料关系视图\n原料库存日报"
    },
    {
      "模块": "UOM",
      "数据集名称": "HYMII/UOM/unit_stop_total_all_qry",
      "描述": "装置停车综合累计记录不分记录类型",
      "数据范围": "截止日报日期累计",
      "参数名称": "Param.1:=STOP_DAY\nParam.2\nParam.3=UNIT_ID\nParam.4\nParam.5=STATUS\nParam.6\nParam.7=FACTORY_ID\nParam.8\n",
      "参数说明": "Param.1: 2013-03-15,日报日期，不传该参数时，默认MII中已设置'2013-03-15'减一天，传递空时(Param.1=)，默认为当前系统时间减一天\nParam.2: -1,日报日期增减天数,默认-1表示减一天\nParam.3: 装置id\nParam.4: --,装置id参数注释\nParam.5: 装置数据状态\nParam.6: 装置数据状态注释\nParam.7: 工厂id\nParam.8: --,工厂id参数注释\n",
      "用例模块": "运行监控下钻",
      "数据源": "应急联动",
      "数据来源": "v_mii_unit\nv_mii_unit_stop_total_all",
      "数据来源描述": "装置视图\n装置统计表"
    },
    {
      "模块": "UOM",
      "数据集名称": "HYMII/UOM/unit_stop_total_type_qry",
      "描述": "装置停车综合累计记录分记录类型",
      "数据范围": "截止日报日期累计",
      "参数名称": "\nParam.1:=STOP_DAY\nParam.2\nParam.3=UNIT_ID\nParam.4\nParam.5=RECORD_TYPE\nParam.6\nParam.7=STATUS\nParam.8\nParam.9=FACTORY_ID\nParam.10\n",
      "参数说明": "Param.1: 2013-03-15,日报日期，不传该参数时，默认MII中已设置'2013-03-15'减一天，传递空时(Param.1=)，默认为当前系统时间减一天\nParam.2: -1,日报日期增减天数,默认-1表示减一天\nParam.3: 装置id\nParam.4: --,装置id参数注释\nParam.5: 记录类型：计划、非计划\nParam.6: --,记录类型参数注释\nParam.7: 装置数据状态\nParam.8: 装置数据状态注释\nParam.9: 工厂id\nParam.10: --,工厂id参数注释\n",
      "用例模块": "运行监控下钻",
      "数据源": "应急联动",
      "数据来源": "v_mii_unit\nv_mii_unit_stop_total_type",
      "数据来源描述": "装置视图\n装置统计表（按类型）"
    },
    {
      "模块": "UOM",
      "数据集名称": "HYMII/UOM/unit_stop_record_qry",
      "描述": "装置停车月记录",
      "数据范围": "截止日报日期的月记录",
      "参数名称": "Param.1:=STOP_DAY\nParam.2\nParam.3=UNIT_ID\nParam.4\nParam.5=RECORD_TYPE\nParam.6\nParam.7=STATUS\nParam.8\nParam.9=FACTORY_ID\nParam.10\n",
      "参数说明": "Param.1: 2013-03-15,日报日期，不传该参数时，默认MII中已设置'2013-03-15'减一天，传递空时(Param.1=)，默认为当前系统时间减一天\nParam.2: -1,日报日期增减天数,默认-1表示减一天\nParam.3: 装置id\nParam.4: --,装置id参数注释\nParam.5: 记录类型\nParam.6: --,记录类型参数注释\nParam.7: 装置数据状态\nParam.8: 装置数据状态注释\nParam.9: 工厂id\nParam.10: --,工厂id参数注释\n",
      "用例模块": "运行监控下钻",
      "数据源": "应急联动",
      "数据来源": "v_mii_unit\nv_mii_unit_stop_record",
      "数据来源描述": "装置视图\n装置停车记录"
    },
    {
      "模块": "UOM",
      "数据集名称": "HYMII/UOM/equ_stop_total_all_qry",
      "描述": "设备停车综合累计记录不分记录类型",
      "数据范围": "截止日报日期累计",
      "参数名称": "Param.1:=STOP_DAY\nParam.2\nParam.3=EQU_ID\nParam.4\nParam.5=STATUS\nParam.6\nParam.7=FACTORY_ID\nParam.8\n",
      "参数说明": "Param.1: 2013-03-15,日报日期，不传该参数时，默认MII中已设置'2013-03-15'减一天，传递空时(Param.1=)，默认为当前系统时间减一天\nParam.2: -1,日报日期增减天数,默认-1表示减一天\nParam.3: 设备id\nParam.4: --,设备id参数注释\nParam.5: 设备数据状态\nParam.6: 设备数据状态注释\nParam.7: 工厂id\nParam.8: --,工厂id参数注释\n",
      "用例模块": "运行监控下钻",
      "数据源": "应急联动",
      "数据来源": "v_mii_equ\nv_mii_equ_stop_total_all",
      "数据来源描述": "设备视图\n设备停车统计"
    },
    {
      "模块": "UOM",
      "数据集名称": "HYMII/UOM/equ_stop_total_type_qry",
      "描述": "设备停车综合累计记录分记录类型",
      "数据范围": "截止日报日期累计",
      "参数名称": "\nParam.1:=STOP_DAY\nParam.2\nParam.3=EQU_ID\nParam.4\nParam.5=RECORD_TYPE\nParam.6\nParam.7=STATUS\nParam.8\nParam.9=FACTORY_ID\nParam.10\n",
      "参数说明": "Param.1: 2013-03-15,日报日期，不传该参数时，默认MII中已设置'2013-03-15'减一天，传递空时(Param.1=)，默认为当前系统时间减一天\nParam.2: -1,日报日期增减天数,默认-1表示减一天\nParam.3: 设备id\nParam.4: --,设备id参数注释\nParam.5: 记录类型：计划、非计划\nParam.6: --,记录类型参数注释\nParam.7: 设备数据状态\nParam.8: 设备数据状态注释\nParam.9: 工厂id\nParam.10: --,工厂id参数注释\n",
      "用例模块": "运行监控下钻",
      "数据源": "应急联动",
      "数据来源": "v_mii_equ\nv_mii_equ_stop_total_type",
      "数据来源描述": "设备视图\n设备停车统计（按类型）"
    },
    {
      "模块": "UOM",
      "数据集名称": "HYMII/UOM/equ_stop_record_qry",
      "描述": "设备停车月记录",
      "数据范围": "截止日报日期的月记录",
      "参数名称": "Param.1:=STOP_DAY\nParam.2\nParam.3=EQU_ID\nParam.4\nParam.5=RECORD_TYPE\nParam.6\nParam.7=STATUS\nParam.8\nParam.9=FACTORY_ID\nParam.10\n",
      "参数说明": "Param.1: 2013-03-15,日报日期，不传该参数时，默认MII中已设置'2013-03-15'减一天，传递空时(Param.1=)，默认为当前系统时间减一天\nParam.2: -1,日报日期增减天数,默认-1表示减一天\nParam.3: 设备id\nParam.4: --,设备id参数注释\nParam.5: 记录类型\nParam.6: --,记录类型参数注释\nParam.7: 设备数据状态\nParam.8: 设备数据状态注释\nParam.9: 工厂id\nParam.10: --,工厂id参数注释\n",
      "用例模块": "运行监控下钻",
      "数据源": "应急联动",
      "数据来源": "v_mii_equ\nv_mii_equ_stop_record",
      "数据来源描述": "设备视图\n设备停车记录"
    },
    {
      "模块": "UOM",
      "数据集名称": "HYMII/UOM/corp_equ_qry",
      "描述": "设备状态查询",
      "数据范围": "全部",
      "参数名称": "Param.1=EQU_ID\nParam.2=\nParam.3=UNIT_ID\nParam.4=",
      "参数说明": "无",
      "用例模块": "运行监控",
      "数据源": "应急联动\n集团PI实时数据库",
      "数据来源": "bas_equ\n设备状态位号实时数据",
      "数据来源描述": "设备基础表\n设备状态位号实时数据"
    },
    {
      "模块": "UOM",
      "数据集名称": "HYMII/UOM/corp_equ_count_qry",
      "描述": "设备状态统计",
      "数据范围": "全部",
      "参数名称": "Param.1=UNIT_ID\nParam.2=",
      "参数说明": "无",
      "用例模块": "运行监控",
      "数据源": "应急联动\n集团PI实时数据库",
      "数据来源": "bas_equ\n设备状态位号实时数据",
      "数据来源描述": "设备基础表\n设备状态位号实时数据"
    },
    {
      "模块": "UOM",
      "数据集名称": "HYMII/UOM/corp_unit_state_count_qry",
      "描述": "装置运行状态统计",
      "数据范围": "全部",
      "参数名称": "Param.1=FACTORY_ID\nParam.2=",
      "参数说明": "无",
      "用例模块": "运行监控",
      "数据源": "应急联动\n集团PI实时数据库",
      "数据来源": "bas_unit\n装置状态位号实时数据",
      "数据来源描述": "设备基础表\n装置状态位号实时数据"
    },
    {
      "模块": "UOM",
      "数据集名称": "HYMII/UOM/corp_unit_qry",
      "描述": "装置负荷、状态过滤查询",
      "数据范围": "全部",
      "参数名称": "Param.1=UNIT_ID\nParam.2=\nParam.3=FACTORY_ID\nParam.4=",
      "参数说明": "无",
      "用例模块": "运行监控",
      "数据源": "应急联动\n集团PI实时数据库",
      "数据来源": "bas_unit\n装置状态、负荷位号实时数据",
      "数据来源描述": "设备基础表\n装置状态、负荷位号实时数据"
    },
    {
      "模块": "UOM",
      "数据集名称": "HYMII/UOM/corp_history_pco_qry",
      "描述": "PI Tag历史数据查询",
      "数据范围": "一个点一小时的数据",
      "参数名称": "Param.1=tag\nParam.2=begin\nParam.3=end",
      "参数说明": "Param.1:位号 不能为空\nParam.2:开始时间传入方法: -1h(一小时) -1d(一天) -1w(一周)、-1month（一月）\n Param.3 结束时间传入方法: -1h(一小时) -1d(一天) -1w(一周)、-1month（一月）",
      "用例模块": "运行监控下钻趋势",
      "数据源": "集团PI实时数据库",
      "数据来源": "位号历史数据",
      "数据来源描述": "位号历史数据"
    },
    {
      "模块": "UOM",
      "数据集名称": "HYMII/UOM/corp_unit_load_avg_qry",
      "描述": "PI Tag历史数据平均值查询",
      "数据范围": "一个点一小时的平均值",
      "参数名称": "Param.1=tag or UNIT_LOAD_TAG\nParam.2=\nParam.3=begin\nParam.4=end\nParam.5=UNIT_ID\nParam.6=\nParam.7=FACTORY_ID\nParam.8=",
      "参数说明": "Param.1:位号 Param.2:控制是否全部 Param.3:开始时间 Param.4 结束时间\n（Param.1、Param.2、都不传，全部装置负荷位号\nParam.1传入位号、Param.2为空 取传入的位号\nParam.2、Param3 传入方法: -1h(一小时) -1d(一天) -1w(一周)、-1month（一月））",
      "用例模块": "运行监控下钻趋势",
      "数据源": "集团PI实时数据库",
      "数据来源": "负荷位号历史数据",
      "数据来源描述": "负荷位号历史数据"
    },
    {
      "模块": "IM",
      "数据集名称": "HYMII/IM/sccc_block_tag_qry",
      "描述": "储罐位号实时数据查询",
      "数据范围": "全部",
      "参数名称": "Param.1=TAG",
      "参数说明": "无",
      "用例模块": "罐区监控",
      "数据源": "焦化PI实时数据库",
      "数据来源": "储罐位号实时数据",
      "数据来源描述": "储罐位号实时数据"
    },
    {
      "模块": "IM",
      "数据集名称": "HYMII/IM/sccc_block_qry",
      "描述": "储罐数据查询",
      "数据范围": "全部",
      "参数名称": "Param.1=BLOCK_ID\nParam.2=\nParam.3=AREA_ID\nParam.4=",
      "参数说明": "无",
      "用例模块": "罐区监控",
      "数据源": "应急联动\n焦化PI实时数据库",
      "数据来源": "v_mii_storage_block\n储罐位号（压力、温度、液位1~4）实时数据",
      "数据来源描述": "存储单元视图\n储罐位号（压力、温度、液位1~4）实时数据"
    }
  ]
});
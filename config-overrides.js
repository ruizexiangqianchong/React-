const { 
    override, 
    fixBabelImports,
    addWebpackAlias
} = require('customize-cra');



const path = require("path");
module.exports = override(
    //按需加载antd
    fixBabelImports('import', {        
        libraryName: 'antd',        
        libraryDirectory: 'es',       
        style: 'css',
    }),
    //别名配置
    addWebpackAlias({        
        ["@"]: path.resolve(__dirname, "./src"),   
        ["@actions"]: path.resolve(__dirname, "./src/actions"),       
        ["@common"]: path.resolve(__dirname, "./src/common"),      
        ["@components"]: path.resolve(__dirname, "./src/components"),             
        ["@pages"]: path.resolve(__dirname, "./src/pages"),      
        ["@router"]: path.resolve(__dirname, "./src/router"),      
        ["@static"]: path.resolve(__dirname, "./src/static"),      
        ["@store"]: path.resolve(__dirname, "./src/store"),   
        ["@utils"]: path.resolve(__dirname, "./src/utils"),
        ["@layout"]: path.resolve(__dirname, "./src/layout"),      
    })
);

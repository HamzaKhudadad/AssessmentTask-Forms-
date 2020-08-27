import React, { useState}from 'react';


import {Table, Row, Col, TreeSelect, Typography,Input, } from 'antd';

import fetchdata from './HigherOrderComponent/fetchdata';


import 'antd/dist/antd.css';


const {Title, Text} = Typography;
const { TreeNode } = TreeSelect;


const UserResponselist = ({allData}) => {

  console.log(allData);

   //local States
    const [SortInfo, setSortInfo] = useState([]);
    const [Value, setValue] = useState();
   

   
    


// Function to handle sort
      const  onChange = value => {
        setValue( value );
        switch(value){
            case'debit':
            setSortInfo(
                {
                    order: 'descend',
                    columnKey: 'debit',
                  },
                );
                break
            case'credit':
            setSortInfo(
                {
                    order: 'descend',
                    columnKey: 'credit',
                  },
                );
                break
                case'closingbalance':
                setSortInfo(
                    {
                        order: 'descend',
                        columnKey: 'closingbalance',
                      },
                    );
                    break
            default:
                setSortInfo(
                    {
                        order: '',
                        columnKey: '',
                      },
                    );

         }
      };
// data for ant table
    const columns = [

     
        {
            title: 'No',
            dataIndex: 'no',
          },

          {
            title: 'Details',
            dataIndex: 'details',
          },
        
        {
          title: 'Debit',
          dataIndex: 'debit',
          sorter: (a, b) => a.debit - b.debit,
           sortOrder: SortInfo.columnKey === 'debit' && SortInfo.order,
           ellipsis: true,
        },
        {
          title: 'Credit',
          dataIndex: 'credit',
          sorter: (a, b) => a.credit - b.credit,
          sortOrder: SortInfo.columnKey === 'credit' && SortInfo.order,
          ellipsis: true,
        },
        {
          title: 'Closing Balance',
          dataIndex: 'closingbalance',
          sorter: (a, b) => a.closingbalance - b.closingbalance,
          sortOrder: SortInfo.columnKey === 'closingbalance' && SortInfo.order,
          ellipsis: true,
        },

        {
          title: 'Status',
          dataIndex: 'status',
        },
     
      ];
      

     



      const data = [];
    
      allData.map((res) => {
        data.push({
         key: res.id,
         no: res.no,
         details: res.details,
         debit: res.debit,
         credit: res.credit ,
         closingbalance: res.closingbalance,
         status: res.status,
       })
       return data;
     });
       
      

         

     return (
     
         <div>   
           
                   <Row gutter={[40, 0]}>
          <Col span={24}>
            <Title level={3}>
            Responses Submitted by You
            </Title>
            </Col>
            </Row>


            <Row gutter={[40, 0]}>
           
            <Col className="gutter-row" >
            <Text>
            Sort by:
            </Text>
            </Col>
            <Col className="gutter-row"  span={6}>
         
        <TreeSelect
        showSearch
        style={{ width: '100%' }}
        value={Value}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        placeholder="Please select"
        allowClear
        treeDefaultExpandAll
        onChange={onChange}
      >
      
            <TreeNode value="debit"  title="Debit" />
            <TreeNode value="credit" title="Credit" />
            <TreeNode value="closingbalance" title="closingbalance" />
        
      </TreeSelect>
      </Col>


     
          
            </Row>
            <br />
        
        <Row gutter={[40, 0]}>
        <Col span={24}>
        <Table  columns={columns} dataSource={data} />
        </Col>
        </Row>
         
         </div>
        );



    }



export default fetchdata(UserResponselist, `user/responses`) ;
    
import React, { useState}from 'react';


import {Table, Row, Col, TreeSelect,message, Typography,Space } from 'antd';

import axios from 'axios';

import fetchdata from './HigherOrderComponent/fetchdata';

import {useHistory}  from 'react-router';
import 'antd/dist/antd.css';


const {Title, Text} = Typography;
const { TreeNode } = TreeSelect;

const { Column} = Table;
const AllResponses = ({allData}) => {

  

   //local States
    const [SortInfo, setSortInfo] = useState([]);
    const [Value, setValue] = useState();
   

    const history = useHistory();
    
console.log(allData);


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


     



      const data = [];
      let i=1;

      allData.map((res) => {
          
          
        data.push({
         key: i,
         no: res.no,
         docno: res.docno,
         details: res.details,
         debit: res.debit,
         credit: res.credit ,
         closingbalance: res.closingbalance,
         status: res.status,
       })
       i++;
       
       return data;
     });
       
      
     const  approve = (no) => {
         console.log(no);
         axios.post("admin/approveresponse",{'no':no}).then((res)=>{
           
          message.info(res.data);
          history.push('/responselist');
         
      
          })
         
     }

     const  discard = (no) => {
        console.log(no);
        axios.post("admin/discardresponse",{'no':no}).then((res)=>{
            
         message.info(res.data);
         history.push('/responselist');
     
         })
        
    }
         

     return (
     
         <div>   
           
                   <Row gutter={[40, 0]}>
          <Col span={24}>
            <Title level={3}>
            All Responses Submitted 
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
        <Table    dataSource={data}>

        <Column title="No" dataIndex="no" key="n0" />
      <Column title="Docno" dataIndex="docno" key="docno" />
 
    <Column title="Details" dataIndex="details" key="details" />
    <Column title="Debit" dataIndex="debit" key="debit" />
    <Column title="Credit" dataIndex="credit" key="credit" />
    <Column title="Closing Balance" dataIndex="closingbalance" key="closingbalance" />
    <Column title="Status" dataIndex="status" key="status" />
    <Column
      title="Action"
      key="action"
      render={(text, record) => (
        <Space size="middle">
          <a onClick={() => approve(record.no)}>Approve form {record.no}</a>
          <a onClick={() => discard(record.no)}>Discard </a>
        </Space>
      )}
    />

        </Table>
        </Col>
        </Row>
         
         </div>
        );



    }



export default fetchdata(AllResponses, `admin/responses`) ;
    
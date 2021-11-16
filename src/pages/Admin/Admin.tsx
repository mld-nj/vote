import { useState, useEffect, useCallback } from "react";
import { getOptions } from "../../api/vote";
import { Table, Tabs } from "antd";
import "./Admin.scss";
const VoteTable = (props: any) => {
  const columns = [
    {
      title: "MikeFlavour",
      dataIndex: "mikeFlavour",
      key: "mikeFlavour",
    },
    {
      title: "ChannelId",
      dataIndex: "channelId",
      key: "channelId",
    },
    {
      title: "OptionId",
      dataIndex: "optionId",
      key: "optionId",
    },
    {
      title: "Count",
      dataIndex: "count",
      key: "count",
    },
  ];
  return <Table dataSource={props.count} columns={columns}></Table>;
};
const Login = () => {
  return (
    <div className="bigBox">
      <h1 className="title">投票数据展示平台</h1>
      <div className="box">
        <h2>登录</h2>
        <form className="login">
          <div className="inputBox">
            <input type="text" name="username" />
            <label>账号</label>
          </div>
          <div className="inputBox">
            <input type="password" />
            <label>密码</label>
          </div>
          <input className="submit" type="submit" name="" value="登录" />
        </form>
      </div>
    </div>
  );
};
const Admin = () => {
  const [voteCount, setVoteCount] = useState([]);
  const [tbaleId, setTableId] = useState(1);
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    getOptions(tbaleId).then((res) => {
      setVoteCount(JSON.parse(res.data));
    });
  }, [tbaleId]);
  const callBack = useCallback((key) => {
    setTableId(key);
  }, []);
  const { TabPane } = Tabs;
  return isLogin === false ? (
    <Login></Login>
  ) : (
    <div className="adminContainer">
      <Tabs defaultActiveKey="1" onChange={callBack}>
        <TabPane tab="纯牛奶" key="1">
          <VoteTable count={voteCount}></VoteTable>
        </TabPane>
        <TabPane tab="酸奶" key="2">
          <VoteTable count={voteCount}></VoteTable>
        </TabPane>
        <TabPane tab="奶制品" key="3">
          <VoteTable count={voteCount}></VoteTable>
        </TabPane>
      </Tabs>
    </div>
  );
};
export default Admin;

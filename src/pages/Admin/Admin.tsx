import { useState, useEffect, useCallback } from "react";
import { getOptions } from "../../api/vote";
import { Table, Tabs } from "antd";
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
const Admin = () => {
  const [voteCount, setVoteCount] = useState([]);
  const [tbaleId, setTableId] = useState(1);
  useEffect(() => {
    getOptions(tbaleId).then((res) => {
      setVoteCount(JSON.parse(res.data));
    });
  }, [tbaleId]);
  const callBack = useCallback((key) => {
    setTableId(key);
  }, []);
  const { TabPane } = Tabs;
  return (
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

import { useEffect, useState } from "react";
import { getAllChannels } from "../../api/vote";
import { Button, Card } from "antd";
import { LockTwoTone } from "@ant-design/icons";
import { Link } from "react-router-dom";
import OptionCard from "../../components/OptionCard/OptionCard";
import "./Index.scss";
const Index = () => {
  const [channels, setChannels] = useState([]);
  useEffect(() => {
    getAllChannels().then((res) => {
      setChannels(JSON.parse(res.data));
    });
  }, []);
  return (
    <div>
      {channels.map((value: any) => {
        console.log(value);
        return (
          <OptionCard
            key={value.channelId}
            channelId={value.channelId}
          ></OptionCard>
        );
      })}
      <Link to={"/admin"} className="admin">
        <LockTwoTone style={{ fontSize: "36px" }} />
        <div className="content">管理员</div>
      </Link>
      <Card>
        <Button type="primary">确认投票</Button>
      </Card>
    </div>
  );
};
export default Index;

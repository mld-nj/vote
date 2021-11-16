import { useEffect, useState } from "react";
import { getAllChannels } from "../../api/vote";
import { Button, Card } from "antd";
import { LockTwoTone } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userOption } from "../../store/optionStore";
import { postOptions } from "../../api/vote";
import OptionCard from "../../components/OptionCard/OptionCard";
import "./Index.scss";
const Index = () => {
  const [channels, setChannels] = useState([]);
  const [userDes, setUserDes] = useRecoilState(userOption);
  useEffect(() => {
    getAllChannels().then((res) => {
      setChannels(JSON.parse(res.data));
    });
  }, []);

  const { optionId1, optionId2, optionId3 } = userDes;
  const vote = () => {
    postOptions(optionId1, optionId2, optionId3).then(
      (res) => {
        console.log(res);
      },
      (err) => {
        alert(err.response.data);
      }
    );
  };
  return (
    <div>
      {channels.map((value: any) => {
        // console.log(value);
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
        <Button onClick={vote} type="primary">
          确认投票
        </Button>
      </Card>
    </div>
  );
};
export default Index;

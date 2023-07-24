import Button from "../components/Button";
import {
  GoBellFill,
  GoDownload,
  GoFileDirectory,
  GoUnmute,
  GoVerified,
} from "react-icons/go";

function ButtonPage() {
  return (
    <div>
      <div>
        <Button primary whiteBg rounded>
          <GoDownload />
          Click me
        </Button>
      </div>
      <div>
        <Button secondary whiteBg>
          <GoFileDirectory />
          save me
        </Button>
      </div>
      <div>
        <Button warning whiteBg>
          <GoBellFill />
          dowmload{" "}
        </Button>
      </div>
      <div>
        <Button danger className="mt-2">
          {" "}
          <GoUnmute />
          dowmload{" "}
        </Button>
      </div>

      <Button secondary whiteBg>
        <GoVerified />
        dowmload{" "}
      </Button>
    </div>
  );
}
export default ButtonPage;

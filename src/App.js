import image from './gmailLogo.png'
import photo from './nutthawat.jpg'
import './App.css';
import { Avatar, Icon,AppBar, Toolbar, IconButton, Select} from '@mui/material';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Help, Margin, Tune } from '@mui/icons-material';
import AppsIcon from '@mui/icons-material/Apps';
import TuneIcon from '@mui/icons-material/Tune';
import SearchIcon from '@mui/icons-material/Search';
import EmailIcon from '@mui/icons-material/Email';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function App() {

  return (
    <div className="App">
      <div className="header" id='header'>
        <a href='https://mail.google.com/'>
              <div className='gmailLogo'>
              <img src='https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png'></img>
              </div>
        </a>


        <div className='textField'>
          <SearchIcon className='searchIcon'></SearchIcon>
          <input className='inputField' placeholder='Search mail' style={{borderRadius:24 , width: '500px', height: '40px',borderColor:'transparent'}}></input>
          <TuneIcon className='tuneIcon'></TuneIcon>
        </div>

        <div className='activeBox'>
            <div className='activeStatus'>
            </div>
            <div className='active'>
              <p>
                Active
              </p>
            </div>
            <div>
              <KeyboardArrowDownIcon style={{paddingRight:10,marginLeft:2,width:15,height:15}}></KeyboardArrowDownIcon>
            </div>
        </div>


        <div className='supportButton'>
          <HelpOutlineIcon></HelpOutlineIcon>
        </div>

        <div className='setting'>
          <SettingsIcon></SettingsIcon>
        </div>

        <div className='appsIcon'>
          <AppsIcon></AppsIcon>
        </div>

        <div className='avatar'>
        <Avatar></Avatar>
        </div>

      </div>

      <div className='nav-bar' id='nav-bar'>
        <ul className='sidebar'>

          <li className='nav-bar-menu'>
              <div className='mainMenu'>
                <MenuIcon></MenuIcon>
              </div>
          </li>

          <li className='nav-bar-menu'>
            <EmailIcon className='emailIcon'></EmailIcon>
            <div className='blEmailIcon'>
              Mail
            </div>
          </li>

          <li className='nav-bar-menu'>
          <ChatBubbleOutlineIcon className='chatBubleOutlineIcon'></ChatBubbleOutlineIcon>
          <div className='blChatBubbleOutlineIcon'>
            Chat
          </div>
          </li>

          <li className='nav-bar-menu'>
            <a href='https://mail.google.com/mail/u/0/#calls'>
            <img className='meetIcon' src='https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/meet_baseline_nv700_20dp.png'></img>
            </a>

            <div className='blMeetIcon'>
              Meet
            </div>
          </li>

        </ul>
      </div>

      <div className='content' id='main'>
        
          <div className='mail-table-head'>
            <CropSquareIcon></CropSquareIcon>
            <ArrowDropDownIcon></ArrowDropDownIcon>
            <RefreshIcon style={{marginLeft:20}}></RefreshIcon>
            <MoreVertIcon style={{marginLeft:20}}></MoreVertIcon>
            <div className='navigate-icon'>
                <NavigateBeforeIcon></NavigateBeforeIcon>
                <NavigateNextIcon style={{marginLeft:20}}></NavigateNextIcon>
            </div>


          </div>
          <table className='mail-table'>
            <tbody>

              <tr className='table-row'>
                <td><CropSquareIcon></CropSquareIcon></td>
                <td><StarBorderIcon></StarBorderIcon></td>
                <td className='sender-name'>Google</td>
                <td className='email-topic'>you're on a design hot streak...</td>
                <td className='email-detail'>- Security alert.</td>
                <td className='email-date'>May 2</td>
              </tr>

              <tr className='table-row'>
                <td><CropSquareIcon></CropSquareIcon></td>
                <td><StarBorderIcon></StarBorderIcon></td>
                <td className='sender-name'>Google</td>
                <td className='email-topic'>you're on a design hot streak...</td>
                <td className='email-detail'>- Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum deleniti.</td>
                <td className='email-date'>April 20</td>
              </tr>

              <tr className='table-row'>
                <td><CropSquareIcon></CropSquareIcon></td>
                <td><StarBorderIcon></StarBorderIcon></td>
                <td className='sender-name'>Zoom</td>
                <td className='email-topic'>Mark Your Calendar! Zoom's Work Transformation Summit returns on 16 May...</td>
                <td className='email-detail'>- Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum deleniti.</td>
                <td className='email-date'>May 2</td>
              </tr>

              <tr className='table-row'>
                <td><CropSquareIcon></CropSquareIcon></td>
                <td><StarBorderIcon></StarBorderIcon></td>
                <td className='sender-name'>Google</td>
                <td className='email-topic'>you're on a design hot streak...</td>
                <td className='email-detail'>- Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum deleniti.</td>
                <td className='email-date'>May 2</td>
              </tr>

              <tr className='table-row'>
                <td><CropSquareIcon></CropSquareIcon></td>
                <td><StarBorderIcon></StarBorderIcon></td>
                <td className='sender-name'>Zoom</td>
                <td className='email-topic'>Mark Your Calendar! Zoom's Work Transformation Summit returns on 16 May...</td>
                <td className='email-detail'>- Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum deleniti.</td>
                <td className='email-date'>June 2</td>
              </tr>

              <tr className='table-row'>
                <td><CropSquareIcon></CropSquareIcon></td>
                <td><StarBorderIcon></StarBorderIcon></td>
                <td className='sender-name'>Google</td>
                <td className='email-topic'>you're on a design hot streak...</td>
                <td className='email-detail'>- Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum deleniti.</td>
                <td className='email-date'>December 14</td>
              </tr>

              <tr className='table-row'>
                <td><CropSquareIcon></CropSquareIcon></td>
                <td><StarBorderIcon></StarBorderIcon></td>
                <td className='sender-name'>Zoom</td>
                <td className='email-topic'>Mark Your Calendar! Zoom's Work Transformation Summit returns on 16 May...</td>
                <td className='email-detail'>- Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum deleniti.</td>
                <td className='email-date'>May 2</td>
              </tr>

            </tbody>
          </table>
      </div>
    </div>
  );
}

export default App;

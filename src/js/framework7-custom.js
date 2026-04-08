
import Framework7, { utils, getDevice, createStore } from 'framework7/lite';
import Panel from 'framework7/components/panel';
import Tabs from 'framework7/components/tabs';
import Form from 'framework7/components/form';
import Input from 'framework7/components/input';
import Checkbox from 'framework7/components/checkbox';
import SmartSelect from 'framework7/components/smart-select';
import Card from 'framework7/components/card';
import Chip from 'framework7/components/chip';
import Preloader from 'framework7/components/preloader';
import PhotoBrowser from 'framework7/components/photo-browser';
import Skeleton from 'framework7/components/skeleton';
import Dialog from 'framework7/components/dialog';
import Toast from 'framework7/components/toast';
import Accordion from 'framework7/components/accordion';

Framework7.use([
  Panel,
  Tabs,
  Form,
  Input,
  Checkbox,
  SmartSelect,
  Card,
  Chip,
  Preloader,
  PhotoBrowser,
  Skeleton,
  Dialog,
  Toast,
  Accordion,
]);

export default Framework7;
export { utils, getDevice, createStore };

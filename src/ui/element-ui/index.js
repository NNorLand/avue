import Carousel from 'components/carousel';
import Crud from 'components/crud';
import Form from 'components/form';
import Checkbox from 'components/checkbox';
import Date from 'components/date';
import Detail from 'components/detail';
import Time from 'components/time';
import Input from 'components/input';
import Radio from 'components/radio';
import Select from 'components/select';
import Cascader from 'components/cascader';
import InputNumber from 'components/input-number';
import Switchs from 'components/switch';
import Rate from 'components/rate';
import Upload from 'components/upload';
import Silder from 'components/silder';
import Img from 'components/img';
import Group from 'components/group';
import Tree from 'components/tree';
import TableTree from 'components/table-tree';
import Search from 'components/search'
import Tabs from 'components/tabs'
import Dynamic from 'components/dynamic'
import Queue from 'components/queue'
import packages from 'core/packages';
if (!window.Element) {
  packages.logs('element-ui')
}

export default [
  Carousel,
  Crud,
  Form,
  Checkbox,
  Date,
  Time,
  Input,
  Radio,
  Select,
  Cascader,
  InputNumber,
  Switchs,
  Rate,
  Upload,
  Silder,
  Img,
  Detail,
  Group,
  Tree,
  TableTree,
  Search,
  Tabs,
  Queue,
  Dynamic
]

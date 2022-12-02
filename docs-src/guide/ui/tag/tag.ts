import { define } from 'gadjet/src/adapter';
import { Tag } from 'gadjet/src/ui/tag/tag';
import { TagX } from 'gadjet/src/ui/tag/tagx';


class MyTag extends Tag {};

define('my-tag', MyTag);
define('el-tagx', TagX);
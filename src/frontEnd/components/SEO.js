
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
// import {Meteor} from 'meteor/meteor';
// import {_} from 'meteor/underscore';

const getMetaTags = () => {
  'دايتي',
  'نقصان الوزن',
  'أكل صحي';

};

// const seoURL = path => Meteor.absoluteUrl(path);

const SEO = ({
  schema, title, description, path, contentType, published, updated, category, tags, twitter,
}) => (
  <Helmet
    htmlAttributes={{
      lang: 'ar',
      itemscope: undefined,
      itemtype: `http://dietii-blog@herokuapp.com${schema}`,
    }}
    title={ title }
    link={[
      {rel: 'canonical'},
    ]}
    meta={getMetaTags({
      title,
      description,
      contentType,
      // url: seoURL(path),
      published,
      updated,
      category,
      tags,
      twitter,
    })}
  />
);

SEO.propTypes = {
  schema: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  path: PropTypes.string,
  contentType: PropTypes.string,
  published: PropTypes.string,
  updated: PropTypes.string,
  category: PropTypes.string,
  tags: PropTypes.array,
  twitter: PropTypes.string,
};

export default SEO;

import React from 'react';
import styled from 'styled-components';

const DefList = styled.dl`
text-align: left;
`;

const FlowConfigDoc = () => (
  <div className="search">
    <h1>Flow Configuration</h1>
    <DefList>
      <dt>Install flow-typed globally</dt>
      <dd>yarn global add flow-typed</dd>

      <dt>Initialize flow in project</dt>
      <dd>yarn flow init</dd>
      <dd>OR</dd>
      <dd>yarn flow -- init</dd>

      <dt>Fetch all types used in project</dt>
      <dd>flow-typed install</dd>

      <dt>Ignore styled-components in node_modules</dt>
      <dd>In .flowconfig add the following under [IGNORE]:</dd>
      <dd>&lt;PROJECT_ROOT&gt;/node_modules/styled-components/*</dd>

      <dt>Mark a file to be checked by flow</dt>
      <dd>At the top of the file, add // @flow</dd>

      <dt>Run flow checking</dt>
      <dd>yarn flow</dd>
    </DefList>
  </div>
);

export default FlowConfigDoc;

import React from 'react';
import styled from 'styled-components';
import { Avatar } from '../atoms/avatar';
import { Heading } from '../atoms/heading';
import { Paragraph } from '../atoms/paragraph';
import { RelatedLink } from '../atoms/relatedLink';

export const AboutTemplate = () => {
  return (
    <Wrapper>
      <Container>
        <AvatarContainer>
          <Avatar />
        </AvatarContainer>
        <MeContainer>
          <Heading text="ABOUT" />
          <Text>
            Birthday: 1992/03
            <br />
            Birthplace: Aichi
            <br />
            Current: Tokyo
          </Text>
          <Paragraph
            text="大学卒業後、専門学校に進学・卒業し、2019年新卒として入社した企業にてSaaSの開発をしています。 業務ではSQL
            Server、ClassicASPをメインとして導入企業ごとのカスタマイズ開発をしています。
            個人ではReact、TypeScriptをメインとしたSPA開発をしており、学生時代のインターンシップを含めて、実務でのReact開発を1年ほど経験しています。
            フロントエンドエキスパートを目指していますが、機会があれば、バックエンド・インフラと広くチャレンジしていきたいとも思っています。
            SaaSサービスのような社会の仕組みを変える可能性を持ったサービスが好きです。"
          />
          <Paragraph text="最近は英語の勉強やUI / UXの勉強に力を入れています。" />
        </MeContainer>
      </Container>
      <RelatedLinkContainer>
        <RelatedLink />
      </RelatedLinkContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 940px;
  margin: 60px auto;
`;

const Container = styled.div`
  display: flex;
`;

const AvatarContainer = styled.div`
  padding: 40px 30px 0;
  margin-right: 40px;
`;

const MeContainer = styled.div``;

const Text = styled.p`
  color: #7f8c8d;
  font-size: 14px;
  line-height: 1.8;
  text-align: left;
  letter-spacing: 0.2px;
  margin-top: 30px;
`;

const RelatedLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;
  padding-top: 60px;
  border-top: 1px solid #bdc3c7;
`;

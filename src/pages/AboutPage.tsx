import { AntDesignOutlined, GithubOutlined, MailOutlined } from "@ant-design/icons"
import { Avatar, Collapse, Flex, Image, Segmented, Space, Tooltip } from "antd"
import './AboutPage.css'
import { Button } from "antd/es/radio"
import reactLogo from '../assets/react.svg'

function AboutPage() {
    return (<>
        <div className="card">
              <div className="SharedInfo">

                <div className="down">
                    <button className="card3" onClick={() => window.open("https://github.com/RainNight-PrincessHighness/General-template", "_blank")}>
                        <svg
                            className="github"
                            height="40px"
                            width="40px"
                            viewBox="0 0 30 30"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
            
            <h1 style={{margin:'0px 0px 0px 20px',position:'absolute'}}>About</h1>
       
            <h2>


            
                <Space className="devlopInfo-box" direction='vertical'>

                    <Space.Compact direction='horizontal' style={{ width: '100%', justifyContent: 'space-between' }}>
                        <Avatar size={80} style={{ position: 'relative', display: 'block', width: '200px', boxShadow: '0 0 10px rgba(0,0,0,.3)', margin: '4.5vh 0 0 2.5vw' }} src="https://avatars.githubusercontent.com/u/53825298?s=96&v=4"></Avatar>

                        <div style={{ justifySelf: 'center', margin: '1vh 1vw 0 4vw', alignSelf: 'center', textAlign: 'center' }}>
                            <p>𝕹𝖎𝖌𝖍𝖙𝕽𝖆𝖎𝖓
                                <br />

                                <span style={{ color: 'rgba(52,52,52,.8)' }}>
                                    兴趣即是世界
                                </span>
                            </p>
                        </div>
                        <Space.Compact style={{
                            width: "100%",          // 确保容器宽度占满父级
                            display: "flex",        // 开启 Flex 布局
                            justifyContent: "center", // 水平居中
                            alignItems: "center",
                        }} direction='vertical'>

                            <Tooltip title='nightrain@luminous.asia'>

                                <a className="email-info" style={{ textAlign: 'center', width: '70px', marginLeft: '20px', height: '10vh', alignSelf:'center',textAlignLast:'center',alignContent: 'center', display: 'block' }}><MailOutlined /></a>

                            </Tooltip>

                        </Space.Compact>
                    </Space.Compact>


                </Space>
            </h2>
         <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
     
                        
            <Collapse
                size="large"
                items={[{key:'1',label:'UI : Ant Design',children:<a href="https://ant-design.antgroup.com/" target="_blank">https://ant-design.antgroup.com/</a>},{
                    key: '2', label: 'Font : ZCOOLQingKeHuangYou-Regular OFL', children: <p>Copyright 2018 The ZCOOL QingKe HuangYou Project Authors (https://www.github.com/googlefonts/zcool-qingke-huangyou)

                        This Font Software is licensed under the SIL Open Font License, Version 1.1.
                        This license is copied below, and is also available with a FAQ at:
                        https://openfontlicense.org


                        -----------------------------------------------------------
                        SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
                        -----------------------------------------------------------

                        PREAMBLE
                        The goals of the Open Font License (OFL) are to stimulate worldwide
                        development of collaborative font projects, to support the font creation
                        efforts of academic and linguistic communities, and to provide a free and
                        open framework in which fonts may be shared and improved in partnership
                        with others.

                        The OFL allows the licensed fonts to be used, studied, modified and
                        redistributed freely as long as they are not sold by themselves. The
                        fonts, including any derivative works, can be bundled, embedded,
                        redistributed and/or sold with any software provided that any reserved
                        names are not used by derivative works. The fonts and derivatives,
                        however, cannot be released under any other type of license. The
                        requirement for fonts to remain under this license does not apply
                        to any document created using the fonts or their derivatives.

                        DEFINITIONS
                        "Font Software" refers to the set of files released by the Copyright
                        Holder(s) under this license and clearly marked as such. This may
                        include source files, build scripts and documentation.

                        "Reserved Font Name" refers to any names specified as such after the
                        copyright statement(s).

                        "Original Version" refers to the collection of Font Software components as
                        distributed by the Copyright Holder(s).

                        "Modified Version" refers to any derivative made by adding to, deleting,
                        or substituting -- in part or in whole -- any of the components of the
                        Original Version, by changing formats or by porting the Font Software to a
                        new environment.

                        "Author" refers to any designer, engineer, programmer, technical
                        writer or other person who contributed to the Font Software.

                        PERMISSION & CONDITIONS
                        Permission is hereby granted, free of charge, to any person obtaining
                        a copy of the Font Software, to use, study, copy, merge, embed, modify,
                        redistribute, and sell modified and unmodified copies of the Font
                        Software, subject to the following conditions:

                        1) Neither the Font Software nor any of its individual components,
                        in Original or Modified Versions, may be sold by itself.

                        2) Original or Modified Versions of the Font Software may be bundled,
                        redistributed and/or sold with any software, provided that each copy
                        contains the above copyright notice and this license. These can be
                        included either as stand-alone text files, human-readable headers or
                        in the appropriate machine-readable metadata fields within text or
                        binary files as long as those fields can be easily viewed by the user.

                        3) No Modified Version of the Font Software may use the Reserved Font
                        Name(s) unless explicit written permission is granted by the corresponding
                        Copyright Holder. This restriction only applies to the primary font name as
                        presented to the users.

                        4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
                        Software shall not be used to promote, endorse or advertise any
                        Modified Version, except to acknowledge the contribution(s) of the
                        Copyright Holder(s) and the Author(s) or with their explicit written
                        permission.

                        5) The Font Software, modified or unmodified, in part or in whole,
                        must be distributed entirely under this license, and must not be
                        distributed under any other license. The requirement for fonts to
                        remain under this license does not apply to any document created
                        using the Font Software.

                        TERMINATION
                        This license becomes null and void if any of the above conditions are
                        not met.

                        DISCLAIMER
                        THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
                        EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
                        MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
                        OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
                        COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
                        INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
                        DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
                        FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
                        OTHER DEALINGS IN THE FONT SOFTWARE.
                    </p>
                }]}
            />
            
        </div>
    </>)
}

export default AboutPage
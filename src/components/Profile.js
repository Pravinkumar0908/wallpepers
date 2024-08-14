import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  margin-top: 100px;
  font-family: Arial, sans-serif;
  max-width: 1600px;
  padding: 20px;
`;

const Sidebar = styled.div`
  width: 250px;
  background-color: #f5f5f5;
  padding: 20px;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
`;

const ProfileSection = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const Avatar = styled.div`
  width: 80px;
  height: 80px;
  background-color: #e57373;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  color: white;
  margin: 0 auto 10px;
`;

const UserName = styled.h2`
  margin: 0;
  font-size: 18px;
`;

const UserId = styled.p`
  margin: 5px 0;
  font-size: 14px;
  color: #666;
`;

const UserType = styled.span`
  background-color: #f0f0f0;
  padding: 3px 8px;
  border-radius: 10px;
  font-size: 12px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #ff7f7f;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  margin-top: 10px;
  
  &:hover {
    background-color: #ff6b6b;
  }
`;

const MenuItem = styled.div`
  padding: 10px;
  cursor: pointer;
  
  &:hover {
    background-color: #e0e0e0;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const TabContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const Tab = styled.button`
  padding: 10px 20px;
  background-color: ${props => props.active ? '#7ac142' : '#f0f0f0'};
  color: ${props => props.active ? 'white' : 'black'};
  border: none;
  border-radius: 20px;
  margin-right: 10px;
  cursor: pointer;
`;

const TableHeader = styled.div`
  display: flex;
  background-color: #e8f5e9;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const HeaderItem = styled.div`
  flex: 1;
  font-weight: bold;
`;

const DownloadItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #e0e0e0;
`;

const ImageInfo = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Thumbnail = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-right: 10px;
`;

const ImageDetails = styled.div``;

const DownloadInfo = styled.div`
  flex: 1;
`;

const AuthInfo = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Link = styled.a`
  color: #7ac142;
  text-decoration: none;
  margin-left: 10px;
`;

const AffiliateBadge = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #ff9800;
  color: white;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
`;

const FloatingButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: ${props => props.right || '20px'};
  background-color: #f0f0f0;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 24px;
`;

const SubscriptionTab = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const FeatureCard = styled.div`
  background-color: #fff9c4;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

const FeatureItem = styled.div`
  text-align: center;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
`;

const FeatureIcon = styled.div`
  font-size: 24px;
  margin-bottom: 10px;
`;

const GoPremiumButton = styled(Button)`
  background-color: #ffd700;
  color: black;
  
  &:hover {
    background-color: #ffc400;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const ConnectButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const ConnectButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
`;

const FacebookButton = styled(ConnectButton)`
  background-color: #1877F2;
`;

const GoogleButton = styled(ConnectButton)`
  background-color: #DB4437;
`;

const TwitterButton = styled(ConnectButton)`
  background-color: #1DA1F2;
`;

const FormSection = styled.div`
  display: flex;
  gap: 40px;
`;

const FormColumn = styled.div`
  flex: 1;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const NewsletterFormGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  border: 1px solid black;
  padding: 10px;
`;

const NewsletterToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  margin-right: 15px;
`;

const NewsletterToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: #2196F3;
  }

  &:focus + span {
    box-shadow: 0 0 1px #2196F3;
  }

  &:checked + span:before {
    transform: translateX(26px);
  }
`;

const NewsletterToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: .4s;
    border-radius: 50%;
  }
`;

const NewsletterToggleText = styled.span`
  font-size: 14px;
  color: #333;
`;

const Profile = () => {
  const [activeSection, setActiveSection] = useState('profile');
  const [activeTab, setActiveTab] = useState('PNG Images');
  const [activeSubscriptionTab, setActiveSubscriptionTab] = useState('individual');
  const [profile, setProfile] = useState({
    realName: '',
    jobTitle: '',
    telephone: '',
    location: '',
    username: 'Pravin Bairwa',
    email: 'xxxxxx@example.com',
    password: '',
    confirmPassword: '',
    newsletter: true
  });
  const [downloads, setDownloads] = useState([
    {
      id: 1,
      name: 'ashok chakra',
      author: 'M Art',
      thumbnail: 'path_to_ashok_chakra_image.jpg',
      date: '2024-08-13',
      size: '1200 * 1200',
      license: 'Free License',
      commercial: false,
    },
    {
      id: 2,
      name: 'kargil bijay diwas 26 july ind...',
      author: 'ArifulArt',
      thumbnail: 'path_to_kargil_image.jpg',
      date: '2024-08-13',
      size: '1200 * 1200',
      license: 'Free License',
      commercial: false,
    },
  ]);

  const handleProfileChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProfile(prevProfile => ({
      ...prevProfile,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleDownload = (id) => {
    console.log(`Downloading item with id: ${id}`);
    // Implement download logic here
  };

  const handleGetCommercialLicense = (id) => {
    console.log(`Getting commercial license for item with id: ${id}`);
    // Implement commercial license logic here
  };

  const renderProfileContent = () => (
    <ProfileContainer>
      <Title>My Profile</Title>
      
      <SectionTitle>Connect</SectionTitle>
      <ConnectButtons>
        <FacebookButton><span>f</span> Continue with Facebook</FacebookButton>
        <GoogleButton><span>G</span> Continue with Google</GoogleButton>
        <TwitterButton><span>🐦</span> Continue with Twitter</TwitterButton>
      </ConnectButtons>
      
      <FormSection>
        <FormColumn>
          <SectionTitle>Personal Data</SectionTitle>
          <FormGroup>
            <Label>Real Name</Label>
            <Input 
              type="text" 
              name="realName" 
              value={profile.realName} 
              onChange={handleProfileChange} 
              placeholder="Your full name"
            />
          </FormGroup>
          <FormGroup>
            <Label>Job Title</Label>
            <Input 
              type="text" 
              name="jobTitle" 
              value={profile.jobTitle} 
              onChange={handleProfileChange} 
              placeholder="Your job title"
            />
          </FormGroup>
          <FormGroup>
            <Label>Telephone Number</Label>
            <Input 
              type="tel" 
              name="telephone" 
              value={profile.telephone} 
              onChange={handleProfileChange} 
              placeholder="12345678"
            />
          </FormGroup>
          <FormGroup>
            <Label>Location</Label>
            <Select name="location" value={profile.location} onChange={handleProfileChange}>
              <option value="">Select location</option>
              <option value="us">United States</option>
              <option value="uk">United Kingdom</option>
              <option value="in">India</option>
            </Select>
          </FormGroup>
        </FormColumn>
        
        <FormColumn>
          <SectionTitle>Account Information</SectionTitle>
          <FormGroup>
            <Label>Username*</Label>
            <Input 
              type="text" 
              name="username" 
              value={profile.username} 
              onChange={handleProfileChange} 
              disabled
            />
          </FormGroup>
          <FormGroup>
            <Label>Email*</Label>
            <Input 
              type="email" 
              name="email" 
              value={profile.email} 
              onChange={handleProfileChange} 
              disabled
            />
          </FormGroup>
          <FormGroup>
            <Label>Password*</Label>
            <Input 
              type="password" 
              name="password" 
              value={profile.password} 
              onChange={handleProfileChange} 
              placeholder="Please fill Password."
            />
          </FormGroup>
          <FormGroup>
            <Label>Reconfirm Password*</Label>
            <Input 
              type="password" 
              name="confirmPassword" 
              value={profile.confirmPassword} 
              onChange={handleProfileChange} 
              placeholder="Reconfirm password"
            />
          </FormGroup>
          <Link href="#">Forget password?</Link>
        </FormColumn>
      </FormSection>
      
      <SectionTitle>Notification</SectionTitle>
      <NewsletterFormGroup>
      <NewsletterToggleSwitch>
        <NewsletterToggleInput
          type="checkbox"
          name="newsletter"
          checked={profile.newsletter}
          onChange={handleProfileChange}
        />
        <NewsletterToggleSlider />
      </NewsletterToggleSwitch>
      <NewsletterToggleText>
        I wish to receive newsletters, promotions and news from pngtree Company
      </NewsletterToggleText>
    </NewsletterFormGroup>
    </ProfileContainer>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'profile':
        return renderProfileContent();
      case 'downloads':
        return (
          <>
            <Title>My Downloads</Title>
            <TabContainer>
              {['PNG Images', 'Backgrounds', 'Templates', 'Text Effect', 'Illustration'].map(tab => (
                <Tab key={tab} active={activeTab === tab} onClick={() => setActiveTab(tab)}>
                  {tab}
                </Tab>
              ))}
            </TabContainer>
            <TableHeader>
              <HeaderItem>Image Information</HeaderItem>
              <HeaderItem>Download Information</HeaderItem>
              <HeaderItem>Authorization Information</HeaderItem>
            </TableHeader>
            {downloads.map(item => (
              <DownloadItem key={item.id}>
                <ImageInfo>
                  <Thumbnail src={item.thumbnail} alt={item.name} />
                  <ImageDetails>
                    <div>{item.name}</div>
                    <div>author: {item.author}</div>
                  </ImageDetails>
                </ImageInfo>
                <DownloadInfo>
                  <div>time: {item.date}</div>
                  <div>size: {item.size}</div>
                </DownloadInfo>
                <AuthInfo>
                  <div>{item.license}</div>
                  <div>{item.commercial ? 'Commercial Use' : 'Not Commercial Use'}</div>
                  <Button onClick={() => handleGetCommercialLicense(item.id)}>Get Commercial License</Button>
                  <Link href="#">How to attribute?</Link>
                </AuthInfo>
              </DownloadItem>
            ))}
            <Link href="#">All my downloads</Link>
          </>
        );
      case 'subscriptions':
        return (
          <>
            <Title>Subscriptions</Title>
            <SubscriptionTab>
              <Tab active={activeSubscriptionTab === 'individual'} onClick={() => setActiveSubscriptionTab('individual')}>Individual Plan</Tab>
              <Tab active={activeSubscriptionTab === 'enterprise'} onClick={() => setActiveSubscriptionTab('enterprise')}>Enterprise Plan</Tab>
            </SubscriptionTab>
            <FeatureCard>
              <FeatureGrid>
                <FeatureItem>
                  <FeatureIcon>📚</FeatureIcon>
                  <h3>8,000,000+ curated assets</h3>
                </FeatureItem>
                <FeatureItem>
                  <FeatureIcon>⬇️</FeatureIcon>
                  <h3>Unlimited downloads forever</h3>
                </FeatureItem>
                <FeatureItem>
                  <FeatureIcon>©️</FeatureIcon>
                  <h3>Valid commercial licenses</h3>
                </FeatureItem>
                <FeatureItem>
                  <FeatureIcon>🔄</FeatureIcon>
                  <h3>Content is updated continuously</h3>
                </FeatureItem>
              </FeatureGrid>
              <GoPremiumButton>Go Premium</GoPremiumButton>
            </FeatureCard>
          </>
        );
      default:
        return <Title>{activeSection}</Title>;
    }
  };

  return (
    <Container>
      <Sidebar>
        <ProfileSection>
          <Avatar>P</Avatar>
          <UserName>Pravin Bairwa</UserName>
          <UserId>ID:86032246</UserId>
          <UserType>Free user</UserType>
          <Button>Become Member</Button>
        </ProfileSection>
        <MenuItem onClick={() => setActiveSection('profile')}>My Profile</MenuItem>
        <MenuItem onClick={() => setActiveSection('device')}>Device Manager</MenuItem>
        <MenuItem onClick={() => setActiveSection('subscriptions')}>Subscriptions</MenuItem>
        <MenuItem onClick={() => setActiveSection('favorites')}>My Favorites</MenuItem>
        <MenuItem onClick={() => setActiveSection('downloads')}>My Downloads</MenuItem>
        <MenuItem onClick={() => setActiveSection('following')}>My Following</MenuItem>
        <MenuItem onClick={() => setActiveSection('uploads')}>My Uploads</MenuItem>
      </Sidebar>
      <MainContent>
        {renderContent()}
      </MainContent>
      <AffiliateBadge>Affiliate Program</AffiliateBadge>
      <FloatingButton right="80px" title="Support">🎧</FloatingButton>
      <FloatingButton title="Scroll to top">↑</FloatingButton>
    </Container>
  );
};

export default Profile;
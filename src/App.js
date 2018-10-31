import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Helmet from 'react-helmet'

import ScrollToTop from './components/ScrollToTop'
import Meta from './components/Meta'
import Home from './views/Home'
import Resume from './views/Resume'
import Projects from './views/Projects'
import Contact from './views/Contact'
import NoMatch from './views/NoMatch'
//import Nav from './components/Nav'
import ProfileCard from './myComponents/ProfileCard'
import Footer from './components/Footer'
import GithubCorner from './components/GithubCorner'
import ServiceWorkerNotifications from './components/ServiceWorkerNotifications'
import data from './data.json'

const RouteWithMeta = ({ component: Component, ...props }) => (
  <Route
    {...props}
    render={routeProps => (
      <Fragment>
        <Meta {...props} />
        <Component {...routeProps} {...props} />
      </Fragment>
    )}
  />
)

class App extends Component {
  state = {
    data
  }

  getDocument = (collection, name) =>
    this.state.data[collection] &&
    this.state.data[collection].filter(page => page.name === name)[0]

  getDocuments = collection => this.state.data[collection] || []

  render () {
    const globalSettings = this.getDocument('settings', 'global')
    const {
      siteTitle,
      siteUrl,
      siteDescription,
      socialMediaCard,
      headerScripts
    } = globalSettings

    const profileCard = this.getDocument('profileCard', 'data')
    const {
        fullName,
        title,
        displayImage
    } = profileCard

    return (
      <Router>
        <div className='React-Wrap'>
          <ScrollToTop />
          <ServiceWorkerNotifications reloadOnUpdate />
          <GithubCorner url='https://github.com/Phizzard' />
          <Helmet
            defaultTitle={siteTitle}
            titleTemplate={`${siteTitle} | %s`}
          />
          <Meta
            headerScripts={headerScripts}
            absoluteImageUrl={
              socialMediaCard &&
              socialMediaCard.image &&
              siteUrl + socialMediaCard.image
            }
            twitterCreatorAccount={
              socialMediaCard && socialMediaCard.twitterCreatorAccount
            }
            twitterSiteAccount={
              socialMediaCard && socialMediaCard.twitterSiteAccount
            }
          />
          <ProfileCard
              fullName={fullName}
              title={title}
              displayImage={displayImage}
          />
          <Switch>
            <RouteWithMeta
              path='/'
              exact
              component={Home}
              description={siteDescription}
              fields={this.getDocument('pages', 'home')}
              featuredSkills={this.getDocument('pages', 'home').featuredSkills.map(({skill}) => this.getDocument('professionalSkills', skill)).sort((a, b)=>{
                  return a.skillLevel < b.skillLevel;
                })}
              featuredEmployment={this.getDocument('pages', 'home').featuredEmployment.map(({job}) => this.getDocument('employment', job))}
            />
            <RouteWithMeta
              path='/resume/'
              exact
              component={Resume}
              fields={this.getDocument('pages', 'resume')}
              experience={this.getDocuments('employment').sort((a, b)=>{
                return a.startDate < b.startDate;
              })}
              education={this.getDocuments('education')}
              skills={this.getDocuments('professionalSkills').sort((a, b)=>{
                return a.skillLevel < b.skillLevel;
              })}
            />
            <RouteWithMeta
              path='/contact/'
              exact
              component={Contact}
              fields={this.getDocument('pages', 'contact')}
              siteTitle={siteTitle}
            />
            <RouteWithMeta
              path='/projects/'
              exact
              component={Projects}
              fields={this.getDocument('pages', 'projects')}
              projects={this.getDocuments('projects')}
            />
            <Route render={() => <NoMatch siteUrl={siteUrl} />} />
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App

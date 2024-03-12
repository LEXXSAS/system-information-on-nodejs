//on client side
//mobx store function get system information from vps server on ubuntu

  async getServerDiscInfo() {
    this.setLoading(true);
    try {
      const response = await $apirefresh.get(`${API_URL}/getsysteminfo`, {withCredentials: true})
      runInAction(() => {
        this.systemData = response.data;
        if (response.data.length > 0) {
          for (let i = 0; i < response.data.length; i++) {
            if ((response.data[i]._blocks /1024 /1024).toFixed(0) > 0 && response.data[i]._filesystem === '/dev/vda1') {
                let a = 'доступно: ' + (response.data[i]._available /1024 /1024).toFixed(0) + "gb";
                let t = 'всего: ' + (response.data[i]._blocks /1024 /1024).toFixed(0) + "gb";
                let u = 'использовано: ' + (response.data[i]._used /1024 /1024).toFixed(0) + "gb";
                this.setAvailable(a)
                this.setTotal(t)
                this.setUsed(u)
            }
          }
        }
        console.log('данные о сервере', response.data)
      })
    } catch (e) {
      console.log((e).response?.data?.message);
    } finally {
      this.setLoading(false);
    }
  }

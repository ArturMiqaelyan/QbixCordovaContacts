package com.q.users.cordova.plugin;

import org.junit.Test;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;

public class TestClass {

    @Test
    public void correctGetSuffix(){
        assertThat(GroupHelper.getSuffix(5),is(" IN(?,?,?,?,?)"));
        assertThat(GroupHelper.getSuffix(1),is(" IN(?)"));
        assertThat(GroupHelper.getSuffix(-5),is(""));
        assertThat(GroupHelper.getSuffix(0),is(""));
    }
}
